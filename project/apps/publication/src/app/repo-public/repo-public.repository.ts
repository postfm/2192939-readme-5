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
}
