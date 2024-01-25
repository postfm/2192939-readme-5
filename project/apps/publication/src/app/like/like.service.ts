import { Injectable } from '@nestjs/common';
import { ActionPublicService } from '../action-public/action-public.service';
import { LikeRepository } from './like.repository';
import { LikeEntity } from './like.entity';
import { LikeDto } from './dto/like.dto';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeRepository,
    private readonly publicService: ActionPublicService
  ) {}

  public async create(publicId: string, dto: LikeDto) {
    const existsPublic = await this.publicService.getPublic(publicId);
    const newComment = LikeEntity.fromDto(dto, existsPublic.publicId);

    return this.likeRepository.save(newComment);
  }

  public async remove(publicId: string, userId: string): Promise<void> {
    return this.likeRepository.deleteLike(publicId, userId);
  }
}
