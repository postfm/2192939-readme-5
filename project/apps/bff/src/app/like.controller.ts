import { LikeDto } from './../../../publication/src/app/like/dto/like.dto';
import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { ApplicationServiceURL } from './app.config';

@ApiTags('Likes')
@Controller('publics/:publicId/likes')
export class LikeController {
  constructor(private readonly httpService: HttpService) {}

  @ApiResponse({
    type: LikeDto,
    status: HttpStatus.CREATED,
    description: 'Like added successfully',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  @Post('/')
  public async create(
    @Param('publicId') publicId: string,
    @Body() dto: LikeDto,
    @Req() req: Request
  ) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Like}`,
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
    status: HttpStatus.NO_CONTENT,
    description: 'Like has deleted now',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Publication or like not found',
  })
  @Delete('/:userId')
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
