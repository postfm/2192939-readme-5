import { Controller, Get, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('notify')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @Get()
  getData() {
    return this.appService.getData();
  }
}
