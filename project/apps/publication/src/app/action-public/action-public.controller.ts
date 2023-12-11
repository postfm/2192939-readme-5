import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActionPublicService } from './action-public.service';
import { CreateCommonPublicDto } from './dto/create-dto/create-common-public.dto';
import { adaptPublicRdo } from './rdo/adapt-public.rdo';
import { UpdateCommonPublicDto } from './dto/update-dto/update-common-public.dto';

@Controller('publication')
export class ActionPublicController {
  constructor(private readonly actionPublicService: ActionPublicService) {}

  @Post(':typePublic')
  public async create(
    @Param('typePublic') typePublic: string,
    @Body() dto: CreateCommonPublicDto
  ) {
    const newPublic = await this.actionPublicService.create(dto, typePublic);

    return adaptPublicRdo(typePublic, newPublic);
  }

  @Get(':typePublic/:id')
  public async show(
    @Param('typePublic') typePublic: string,
    @Param('id') id: string
  ) {
    const existPublic = await this.actionPublicService.getPublic(id);

    return adaptPublicRdo(typePublic, existPublic);
  }

  @Put(':typePublic/:id')
  public async changePublic(
    @Param('typePublic') typePublic: string,
    @Param('id') id: string,
    @Body() dto: UpdateCommonPublicDto
  ) {
    const newPublic = await this.actionPublicService.changePublic(
      id,
      typePublic,
      dto
    );

    return adaptPublicRdo(typePublic, newPublic);
  }

  @Delete(':typePublic/:id')
  public async remove(
    @Param('typePublic') typePublic: string,
    @Param('id') id: string
  ) {
    await this.actionPublicService.remove(id);
  }
}
