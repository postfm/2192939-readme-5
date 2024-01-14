import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ActionPublicService } from './action-public.service';
import { CreatePublicDto } from './dto/create-dto/create-public.dto';
import { fillDto } from '@project/shared/helpers';
import { PublicRdo } from './rdo/public.rdo';
import { PublicQuery } from '../repo-public/query/public.query';
import { PublicWithPaginationRdo } from './rdo/public-with-pagination.rdo';
import { UpdatePublicDto } from './dto/update-dto/update-public.dto';
import { ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('publics')
export class ActionPublicController {
  constructor(private readonly actionPublicService: ActionPublicService) {}

  @Post('/')
  @ApiBadRequestResponse()
  public async create(@Body() dto: CreatePublicDto) {
    const newPublic = await this.actionPublicService.createPublic(dto);

    return fillDto(PublicRdo, newPublic.toPOJO());
  }

  @Get('/:id')
  public async show(@Param('id') id: string) {
    const existPublic = await this.actionPublicService.getPublic(id);

    return fillDto(PublicRdo, existPublic.toPOJO());
  }

  @Get('/')
  public async index(@Query() query: PublicQuery) {
    const publicsWithPagination = await this.actionPublicService.getPublics(
      query
    );
    const result = {
      ...publicsWithPagination,
      entities: publicsWithPagination.entities.map((items) => items.toPOJO()),
    };
    return fillDto(PublicWithPaginationRdo, result);
  }

  @Patch('/:id')
  public async changePublic(
    @Param('id') id: string,
    @Body() dto: UpdatePublicDto
  ) {
    const updatePublic = await this.actionPublicService.changePublic(id, dto);

    return fillDto(PublicRdo, updatePublic.toPOJO());
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id') id: string) {
    await this.actionPublicService.remove(id);
  }

  @Get('/drafts')
  public async getDrafts() {
    console.log('getDrafts');
  }
}
