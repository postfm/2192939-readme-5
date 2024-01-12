import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/shared/helpers';
import { CommentRdo } from './rdo/comment.rdo';
import { CommentQuery } from './query/comment.query';
import { CommentWithPaginationRdo } from './rdo/comment-with-pagination.rdo';

@Controller('publics/:publicId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/')
  public async create(
    @Param('publicId') publicId: string,
    @Body() dto: CreateCommentDto
  ) {
    const newComment = await this.commentService.create(publicId, dto);

    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @Get('/')
  public async show(@Query() query: CommentQuery) {
    const commentsWithPagination = await this.commentService.get(query);

    const result = {
      ...commentsWithPagination,
      entities: commentsWithPagination.entities.map((items) => items.toPOJO()),
    };

    return fillDto(CommentWithPaginationRdo, result);
  }

  @Delete('/:commentId')
  public async remove(@Param('commentId') commentId: string) {
    await this.commentService.remove(commentId);
  }
}
