import { SearchQuery } from './../../../publication/src/app/repo-public/query/search.query';
import { PublicQuery } from './../../../publication/src/app/repo-public/query/public.query';
import { UpdatePublicDto } from './../../../publication/src/app/action-public/dto/update-dto/update-public.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CheckAuthGuard } from './guards/check.auth.guard';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { CreatePublicDto } from './dto/create-public.dto';
import { HttpService } from '@nestjs/axios';
import { ApplicationServiceURL } from './app.config';
import { UserIdInterceptor } from './interceptors/user-id-interceptor';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { RepostPublicDto } from './dto/repost-public.dto';

@ApiTags('Publics')
@ApiExtraModels(CreatePublicDto, UpdatePublicDto)
@Controller('/')
@UseFilters(AxiosExceptionFilter)
export class PublicController {
  constructor(private readonly httpService: HttpService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Publication added successfully',
  })
  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UserIdInterceptor)
  @Post('publics')
  public async create(@Body() dto: CreatePublicDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Public}/`,
      dto
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Publication added successfully',
  })
  @Post(`files/upload/photo`)
  @UseInterceptors(FileInterceptor('photo'))
  public async createPhotoPublication(
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File,
    @Body('tags') tags?: string
  ) {
    console.log(tags, file);

    const { data: photo } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Uploader}/upload/photo`,
      file,
      {
        headers: {
          'Content-Type': req.headers['content-type'],
        },
      }
    );
    console.log(photo);

    const dto = { type: 'photo', photo: photo.id, tags: [] };
    console.log(dto);

    if (tags) {
      dto.tags = tags.split(',');
    }
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Public}/upload/photo`,
      dto,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
    console.log(data);

    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Publication updated',
  })
  @UseGuards(CheckAuthGuard)
  @Patch(`publics/:id}`)
  public async update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() dto: UpdatePublicDto
  ) {
    const { data } = await this.httpService.axiosRef.patch(
      `${ApplicationServiceURL.Public}/${id}`,
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
    status: HttpStatus.CREATED,
    description: 'Publication reposted',
  })
  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UserIdInterceptor)
  @Post(`publics/repost/:id`)
  public async repost(@Param('id') id: string, @Body() dto: RepostPublicDto) {
    console.log(id, dto);

    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Public}/repost/${id}`,
      dto
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Publication removed',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Publication is not deleted',
  })
  @UseGuards(CheckAuthGuard)
  @Delete(`publics/:id`)
  public async delete(@Param('id') id: string, @Req() req: Request) {
    await this.httpService.axiosRef.delete(
      `${ApplicationServiceURL.Public}/${id}`,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of publications is showing',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'There are no posts that can be loaded',
  })
  @Get()
  public async showPublications(@Query() query: PublicQuery) {
    const { data } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}`,
      {
        params: query,
      }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of publications is showing',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'There are no posts that can be loaded',
  })
  @Get('search')
  public async searchPublicationsByTitle(@Query() query: SearchQuery) {
    const { data } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}/search`,
      {
        params: query,
      }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of publications is showing',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'There are no posts that can be loaded',
  })
  @UseGuards(CheckAuthGuard)
  @Get('drafts/:id')
  async showDrafts(@Param('id') id: string) {
    const { data } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}/drafts`,
      { params: id }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Publications sent',
  })
  @UseGuards(CheckAuthGuard)
  @Get('send-news/:id/:email')
  public async sendNews(
    @Req() req: Request,
    @Param('id') id: string,
    @Param('email') email: string
  ) {
    await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}/send-news/:id/:email`,
      { params: { id, email } }
    );
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Publication is showing',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Publication is not found',
  })
  @Get(':id')
  public async showPublicationById(@Param('id') id: string) {
    const { data: publicationData } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}/${id}`
    );
    return publicationData;
  }
}
