import { hash } from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BasePostgresRepository } from '@project/shared/core';
import { PublicEntity } from './repo-public.entity';
import { PaginationResult, Public } from '@project/shared/app/types';
import { PrismaClientService } from 'libs/shared/publication/models/src/lib/prisma-client.service';
import { Prisma } from '@prisma/client';
import { PublicQuery } from './query/public.query';
import {
  DEFAULT_PUBLIC_STATUS,
  DEFAULT_SORTING_TYPE,
  DEFAULT_SORT_DIRECTION,
  PUBLIC_STATUS_DRAFT,
} from './repo-public.constants';
import { SearchQuery } from './query/search.query';

@Injectable()
export class RepoPublicRepository extends BasePostgresRepository<
  PublicEntity,
  Public
> {
  constructor(protected readonly client: PrismaClientService) {
    super(client, PublicEntity.fromObject);
  }

  private async getPublicCount(
    where: Prisma.PublicWhereInput
  ): Promise<number> {
    return this.client.public.count({ where });
  }

  private calculatePublicPages(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  public async save(entity: PublicEntity): Promise<PublicEntity> {
    const pojoEntity = entity.toPOJO();

    const record = await this.client.public.create({
      data: {
        ...pojoEntity,
        comments: {
          connect: [],
        },
      },
    });

    entity.publicId = record.publicId;
    return entity;
  }

  public async deleteById(publicId: string): Promise<void> {
    await this.client.public.delete({
      where: {
        publicId,
      },
    });
  }

  public async findById(publicId: unknown): Promise<PublicEntity> {
    const where: Prisma.PublicWhereInput = {};
    where.publicId = publicId;
    const document = await this.client.public.findFirst({
      where,
      include: {
        comments: true,
      },
    });

    if (!document) {
      throw new NotFoundException(`Post with id ${publicId} not found`);
    }

    return this.createEntityFromDocument(document);
  }

  public async update(
    publicId: string,
    entity: PublicEntity
  ): Promise<PublicEntity> {
    const pojoEntity = entity.toPOJO();
    const updatePost = await this.client.public.update({
      where: { publicId },
      data: {
        userId: pojoEntity.userId,
        isRepost: pojoEntity.isRepost,
        title: pojoEntity.title,
        video: pojoEntity.video,
        notice: pojoEntity.notice,
        text: pojoEntity.text,
        quote: pojoEntity.quote,
        author: pojoEntity.author,
        photo: pojoEntity.photo,
        link: pojoEntity.link,
        description: pojoEntity.description,
        tags: pojoEntity.tags,
        commentsCount: pojoEntity.commentsCount,
        likesCount: pojoEntity.likesCount,
        publicType: pojoEntity.publicType,
        publicStatus: pojoEntity.publicStatus,
        createAt: pojoEntity.createAt,
      },
      include: {
        comments: true,
      },
    });

    return this.createEntityFromDocument(updatePost);
  }

  public async find(
    query?: PublicQuery
  ): Promise<PaginationResult<PublicEntity>> {
    const skip =
      query?.page && query?.limit ? (query.page - 1) * query.limit : undefined;
    const take = query?.limit;
    const where: Prisma.PublicWhereInput = {};
    const orderBy: Prisma.PublicOrderByWithAggregationInput = {};
    const sortingType = query?.sortingType
      ? query.sortingType
      : DEFAULT_SORTING_TYPE;
    const sortDirection = query?.sortDirection
      ? query.sortDirection
      : DEFAULT_SORT_DIRECTION;

    where.publicStatus = query?.publicStatus
      ? query.publicStatus
      : DEFAULT_PUBLIC_STATUS;

    orderBy[sortingType] = sortDirection;

    if (query?.userId) {
      where.userId = query.userId;
    }

    if (query.publicType) {
      where.publicType = query.publicType;
    }

    if (query.tag) {
      where.tags = { has: query.tag };
    }

    const [records, postCount] = await Promise.all([
      this.client.public.findMany({
        where,
        orderBy,
        skip,
        take,
        include: { comments: true },
      }),
      this.getPublicCount(where),
    ]);

    return {
      entities: records.map((record) => this.createEntityFromDocument(record)),
      currentPage: query?.page,
      totalPages: this.calculatePublicPages(postCount, take),
      itemsPerPage: take,
      totalItems: postCount,
    };
  }

  public async findDrafts(userId: string): Promise<PublicEntity[]> {
    const where: Prisma.PublicWhereInput = {};
    where.userId = userId;
    where.publicStatus = PUBLIC_STATUS_DRAFT;
    const records = await this.client.public.findMany({
      where,
    });

    return records.map((record) => this.createEntityFromDocument(record));
  }

  public async findRepost(
    publicId: string,
    userId: string
  ): Promise<PublicEntity> {
    const where: Prisma.PublicWhereInput = {};
    where.publicId = publicId;
    where.userId = userId;
    const document = await this.client.public.findFirst({
      where,
    });

    return this.createEntityFromDocument(document);
  }

  public async findByTitle(query?: SearchQuery): Promise<PublicEntity[]> {
    const where: Prisma.PublicWhereInput = {};
    const take = query?.limit;
    where.publicStatus = DEFAULT_PUBLIC_STATUS;
    where.title = { search: query.title };

    const publics = await this.client.public.findMany({
      where,
      take,
      include: {
        comments: true,
        likes: true,
      },
    });

    return publics.map((item) => this.createEntityFromDocument(item));
  }
}
