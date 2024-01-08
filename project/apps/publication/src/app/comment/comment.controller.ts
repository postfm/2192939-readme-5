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
  public async show(@Param('postId') postId: string) {
    const comments = await this.commentService.get(postId);

    return fillDto(
      CommentRdo,
      comments.map((comment) => comment.toPOJO())
    );
  }

  @Delete('/')
  public async remove(@Param('publicId') publicId: string) {
    await this.commentService.remove(publicId);
  }
}
