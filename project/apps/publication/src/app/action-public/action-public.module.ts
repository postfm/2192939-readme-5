import { PrismaClientModule } from './../../../../../libs/shared/publication/models/src/lib/prisma-client.module';
import { Module } from '@nestjs/common';
import { ActionPublicService } from './action-public.service';
import { ActionPublicController } from './action-public.controller';
import { RepoPublicModule } from '../repo-public/repo-public.module';
import { RepoPublicRepository } from '../repo-public/repo-public.repository';
import { NotifyModule } from '../notify/notify.module';

@Module({
  imports: [RepoPublicModule, PrismaClientModule, NotifyModule],
  controllers: [ActionPublicController],
  providers: [ActionPublicService, RepoPublicRepository],
  exports: [ActionPublicService],
})
export class ActionPublicModule {}
