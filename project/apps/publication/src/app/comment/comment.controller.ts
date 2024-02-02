import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('publics/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment added successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @Post('/:publicId')
  public async create(
    @Param('publicId') publicId: string,
    @Body() dto: CreateCommentDto
  ) {
    const newComment = await this.commentService.create(publicId, dto);

    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({
    type: CommentWithPaginationRdo,
    status: HttpStatus.OK,
    description: 'All comments were show',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Publication not found',
  })
  @Get('/:publicId')
  public async show(
    @Param('publicId') publicId: string,
    @Query() query: CommentQuery
  ) {
    query.publicId = publicId;
    const commentsWithPagination = await this.commentService.get(query);

    const result = {
      ...commentsWithPagination,
      entities: commentsWithPagination.entities.map((items) => items.toPOJO()),
    };

    return fillDto(CommentWithPaginationRdo, result);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Comments has deleted now',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Publication or comment not found',
  })
  @Delete('/:commentId')
  public async remove(@Param('commentId') commentId: string) {
    await this.commentService.remove(commentId);
  }
}
