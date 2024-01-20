import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { fillDto } from '@project/shared/helpers';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LikeService } from './like.service';
import { LikeDto } from './dto/like.dto';
import { LikeRdo } from './rdo/like.rdo';

@ApiTags('Likes')
@Controller('publics/:publicId/likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

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
    @Body() dto: LikeDto
  ) {
    console.log(publicId);

    const newLike = await this.likeService.create(publicId, dto);

    return fillDto(LikeRdo, newLike.toPOJO());
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
  public async remove(
    @Param('publicId') publicId: string,
    @Param('userId') userId: string
  ) {
    await this.likeService.remove(publicId, userId);
  }
}
