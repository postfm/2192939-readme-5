import { Injectable, NotFoundException } from '@nestjs/common';
import { BasePostgresRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';
import { Comment } from '@project/shared/app/types';
import { PrismaClientService } from 'libs/shared/publication/models/src/lib/prisma-client.service';
import { MAX_COMMENTS_COUNT } from './comment.constants';

@Injectable()
export class CommentRepository extends BasePostgresRepository<
  CommentEntity,
  Comment
> {
  constructor(protected readonly client: PrismaClientService) {
    super(client, CommentEntity.fromObject);
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

  public async findByPublicId(publicId: string): Promise<CommentEntity[]> {
    const records = await this.client.comment.findMany({
      where: {
        publicId,
      },
    });

    return records.map((records) => this.createEntityFromDocument(records));
  }

  public async deleteById(commentId: string): Promise<void> {
    await this.client.comment.delete({
      where: {
        commentId,
      },
    });
  }
}
