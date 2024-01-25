import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BasePostgresRepository } from '@project/shared/core';
import { Like } from '@project/shared/app/types';
import { PrismaClientService } from 'libs/shared/publication/models/src/lib/prisma-client.service';
import { Prisma } from '@prisma/client';
import { LikeEntity } from './like.entity';

@Injectable()
export class LikeRepository extends BasePostgresRepository<LikeEntity, Like> {
  constructor(protected readonly client: PrismaClientService) {
    super(client, LikeEntity.fromObject);
  }

  private async getCommentCount(where: Prisma.LikeWhereInput): Promise<number> {
    return this.client.like.count({ where });
  }

  public async save(entity: LikeEntity): Promise<LikeEntity> {
    const existsLink = await this.findByUserId(entity.publicId, entity.userId);
    if (existsLink) {
      throw new ConflictException(`Link already exists`);
    }

    const record = await this.client.like.create({
      data: {
        userId: entity.userId,
        publicId: entity.publicId,
      },
    });

    entity.likeId = record.likeId;

    await this.client.public.update({
      where: {
        publicId: entity.publicId,
      },
      data: {
        likesCount: { increment: 1 },
      },
    });
    return entity;
  }

  public async findByUserId(userId: string, publicId: string): Promise<Like> {
    const like = await this.client.like.findFirst({
      where: {
        userId,
        publicId,
      },
    });

    return like;
  }

  public async deleteLike(publicId: string, userId: string): Promise<void> {
    const like = await this.findByUserId(userId, publicId);

    if (!like) {
      throw new NotFoundException(`Like don't exists`);
    }

    await this.client.like.delete({
      where: {
        likeId: like.likeId,
      },
    });

    await this.client.public.update({
      where: {
        publicId: like.publicId,
      },
      data: {
        likesCount: { decrement: 1 },
      },
    });
  }
}
