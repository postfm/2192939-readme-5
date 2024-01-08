import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { ActionPublicModule } from '../action-public/action-public.module';
import { RepoPublicModule } from '../repo-public/repo-public.module';
import { PrismaClientModule } from 'libs/shared/publication/models/src/lib/prisma-client.module';

@Module({
  imports: [ActionPublicModule, RepoPublicModule, PrismaClientModule],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: [CommentService, CommentRepository],
})
export class CommentModule {}
