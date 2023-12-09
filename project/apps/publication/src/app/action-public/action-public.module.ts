import { Module } from '@nestjs/common';
import { ActionPublicService } from './action-public.service';
import { ActionPublicController } from './action-public.controller';

@Module({
  providers: [ActionPublicService],
  controllers: [ActionPublicController],
})
export class ActionPublicModule {}
