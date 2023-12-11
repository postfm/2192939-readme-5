import { Module } from '@nestjs/common';
import { RepoPublicModule } from './repo-public/repo-public.module';
import { ActionPublicModule } from './action-public/action-public.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { RepostModule } from './repost/repost.module';

@Module({
  imports: [
    RepoPublicModule,
    ActionPublicModule,
    CommentModule,
    LikeModule,
    RepostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
