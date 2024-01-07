import { Injectable, NotFoundException } from '@nestjs/common';
import { BasePostgresRepository } from '@project/shared/core';
import { PublicEntity } from './public.entity';
import { Public } from '@project/shared/app/types';
import { PrismaClientService } from 'libs/shared/publication/models/src/lib/prisma-client.service';

@Injectable()
export class PublicRepository extends BasePostgresRepository<
  PublicEntity,
  Public
> {
  constructor(protected readonly client: PrismaClientService) {
    super(client, PublicEntity.fromObject);
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
    const document = await this.client.public.findFirst({
      where: {
        publicId,
      },
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
        header: pojoEntity.header,
        notice: pojoEntity.notice,
        text: pojoEntity.text,
        quote: pojoEntity.quote,
        author: pojoEntity.author,
        photo: pojoEntity.photo,
        link: pojoEntity.link,
        description: pojoEntity.description,
        tags: pojoEntity.tags,
        publicType: pojoEntity.publicType,
        publicStatus: pojoEntity.publicStatus,
      },
      include: {
        comments: true,
      },
    });

    return this.createEntityFromDocument(updatePost);
  }
}
