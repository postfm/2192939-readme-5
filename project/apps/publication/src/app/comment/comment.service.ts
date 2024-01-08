import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { ActionPublicService } from '../action-public/action-public.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly publicService: ActionPublicService
  ) {}

  public async create(publicId: string, dto: CreateCommentDto) {
    const existsPublic = await this.publicService.getPublic(publicId);
    const newComment = CommentEntity.fromDto(dto, existsPublic.publicId);

    return this.commentRepository.save(newComment);
  }

  public async get(publicId: string): Promise<CommentEntity[]> {
    return this.commentRepository.findByPublicId(publicId);
  }

  public async remove(commentId: string) {
    return this.commentRepository.deleteById(commentId);
  }
}
