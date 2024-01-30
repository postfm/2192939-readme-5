import { CommentQuery } from './../../../publication/src/app/comment/query/comment.query';
import { CreateCommentDto } from './../../../publication/src/app/comment/dto/create-comment.dto';
import {
  Body,
  Req,
  Get,
  Param,
  Controller,
  Post,
  Query,
  UseFilters,
  UseGuards,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { CheckAuthGuard } from './guards/check.auth.guard';
import { ApplicationServiceURL } from './app.config';

@ApiTags('comments')
@Controller('publics/:publicId/comments')
@UseFilters(AxiosExceptionFilter)
export class CommentsController {
  constructor(private readonly httpService: HttpService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Comment added successfully',
  })
  @UseGuards(CheckAuthGuard)
  @Post('/')
  public async createComment(
    @Body() dto: CreateCommentDto,
    @Req() req: Request
  ) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Comment}`,
      dto,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All comments are shown',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Publication is not found',
  })
  @Get('/')
  public async showCommentsByPostId(
    @Param('id') id: string,
    @Query() query: CommentQuery
  ) {
    const { data } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Comment}/${id}`,
      {
        params: query,
      }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment removed',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment with this id is not found',
  })
  @UseGuards(CheckAuthGuard)
  @Delete(`/:id`)
  public async remove(@Param('id') id: string, @Req() req: Request) {
    const { data } = await this.httpService.axiosRef.delete(
      `${ApplicationServiceURL.Comment}/${id}`,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
    return data;
  }
}
