import { ActionPublicModule } from './../action-public/action-public.module';
import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { RepoPublicModule } from '../repo-public/repo-public.module';
import { PrismaClientModule } from 'libs/shared/publication/models/src/lib/prisma-client.module';
import { LikeRepository } from './like.repository';

@Module({
  imports: [ActionPublicModule, RepoPublicModule, PrismaClientModule],
  controllers: [LikeController],
  providers: [LikeService, LikeRepository],
  exports: [LikeService, LikeRepository],
})
export class LikeModule {}
