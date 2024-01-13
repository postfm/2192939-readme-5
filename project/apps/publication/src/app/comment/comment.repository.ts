import { PaginationResult } from './../../../../../libs/shared/app/types/src/lib/pagination.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BasePostgresRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';
import { Comment } from '@project/shared/app/types';
import { PrismaClientService } from 'libs/shared/publication/models/src/lib/prisma-client.service';
import { MAX_COMMENTS_COUNT } from './comment.constants';
import { CommentQuery } from './query/comment.query';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentRepository extends BasePostgresRepository<
  CommentEntity,
  Comment
> {
  constructor(protected readonly client: PrismaClientService) {
    super(client, CommentEntity.fromObject);
  }

  private async getCommentCount(
    where: Prisma.CommentWhereInput
  ): Promise<number> {
    return this.client.comment.count({ where });
  }

  private calculateCommentPages(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  public async save(entity: CommentEntity): Promise<CommentEntity> {
    const record = await this.client.comment.create({
      data: {
        text: entity.text,
        userId: entity.userId,
        publicId: entity.publicId,
      },
    });

    entity.commentId = record.commentId;

    await this.client.public.update({
      where: {
        publicId: entity.publicId,
      },
      data: {
        commentsCount: { increment: 1 },
      },
    });
    return entity;
  }

  public async findById(commentId): Promise<CommentEntity> {
    const record = await this.client.comment.findFirst({
      where: {
        commentId,
      },
      take: MAX_COMMENTS_COUNT,
    });

    if (!record) {
      throw new NotFoundException(`Comment with id ${commentId} not found`);
    }

    return this.createEntityFromDocument(record);
  }

  public async findByPublicId(
    query?: CommentQuery
  ): Promise<PaginationResult<CommentEntity>> {
    const skip =
      query?.page && query?.limit ? (query.page - 1) * query.limit : undefined;
    const take = query?.limit;
    const where: Prisma.CommentWhereInput = {};
    const orderBy: Prisma.CommentOrderByWithAggregationInput = {};

    where.publicId = query.publicId;
    orderBy.createAt = query.SortDirection;

    const [records, commentCount] = await Promise.all([
      this.client.comment.findMany({
        where,
        orderBy,
        skip,
        take,
      }),
      this.getCommentCount(where),
    ]);

    return {
      entities: records.map((record) => this.createEntityFromDocument(record)),
      currentPage: query?.page,
      totalPages: this.calculateCommentPages(commentCount, take),
      itemsPerPage: take,
      totalItems: commentCount,
    };
  }

  public async deleteById(commentId: string): Promise<void> {
    const comment = await this.findById(commentId);
    await this.client.comment.delete({
      where: {
        commentId,
      },
    });

    await this.client.public.update({
      where: {
        publicId: comment.publicId,
      },
      data: {
        commentsCount: { decrement: 1 },
      },
    });
  }
}
