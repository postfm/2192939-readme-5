import { Like } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { LikeDto } from './dto/like.dto';

export class LikeEntity implements Like, Entity<string, Like> {
  public likeId?: string;
  public publicId: string;
  public userId: string;

  public toPOJO(): Like {
    return {
      publicId: this.publicId,
      userId: this.userId,
    };
  }

  public populate(data: Like) {
    this.publicId = data.publicId;
    this.userId = data.userId;

    return this;
  }

  static fromObject(data: Like): LikeEntity {
    return new LikeEntity().populate(data);
  }

  static fromDto(dto: LikeDto, publicId: string): LikeEntity {
    return new LikeEntity().populate({
      ...dto,
      publicId,
    });
  }
}
