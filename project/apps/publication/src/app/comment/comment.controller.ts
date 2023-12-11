import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/shared/helpers';
import { CommentRdo } from './rdo/comment.rdo';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  public async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);

    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @Delete('delete/:id')
  public async remove(@Param('id') id: string) {
    await this.commentService.remove(id);
  }
}
