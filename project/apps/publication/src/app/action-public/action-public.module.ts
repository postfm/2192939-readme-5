import { Module } from '@nestjs/common';
import { ActionPublicService } from './action-public.service';
import { ActionPublicController } from './action-public.controller';
import { RepoPublicModule } from '../repo-public/repo-public.module';

@Module({
  imports: [RepoPublicModule],
  providers: [ActionPublicService],
  controllers: [ActionPublicController],
})
export class ActionPublicModule {}
