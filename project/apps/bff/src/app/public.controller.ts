import { UpdatePublicDto } from './../../../publication/src/app/action-public/dto/update-dto/update-public.dto';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
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

@ApiTags('Publics')
@ApiExtraModels(CreatePublicDto, UpdatePublicDto)
@Controller('publics')
@UseFilters(AxiosExceptionFilter)
export class PublicController {
  constructor(private readonly httpService: HttpService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Publication added successfully',
  })
  @UseGuards(CheckAuthGuard)
  @Post('/')
  @UseGuards(CheckAuthGuard)
  @UseInterceptors(UserIdInterceptor)
  @Post('/')
  public async create(@Body() dto: CreatePublicDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Public}/`,
      dto
    );
    return data;
  }
}
