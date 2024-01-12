import { PaginationResult } from './../../../../../libs/shared/app/types/src/lib/pagination.interface';
import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { ActionPublicService } from '../action-public/action-public.service';
import { CommentQuery } from './query/comment.query';

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

  public async get(
    query: CommentQuery
  ): Promise<PaginationResult<CommentEntity>> {
    return this.commentRepository.findByPublicId(query);
  }

  public async remove(commentId: string) {
    return this.commentRepository.deleteById(commentId);
  }
}
