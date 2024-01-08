import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/shared/helpers';
import { CommentRdo } from './rdo/comment.rdo';

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
  public async show(@Param('publicId') publicId: string) {
    const comments = await this.commentService.get(publicId);

    return fillDto(
      CommentRdo,
      comments.map((comment) => comment.toPOJO())
    );
  }

  @Delete('/:commentId')
  public async remove(@Param('commentId') commentId: string) {
    await this.commentService.remove(commentId);
  }
}
