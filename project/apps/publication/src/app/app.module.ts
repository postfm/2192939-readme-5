import { ConfigPublicModule } from './../../../../libs/shared/config/publication/src/lib/config-public.module';
import { Module } from '@nestjs/common';
import { RepoPublicModule } from './repo-public/repo-public.module';
import { ActionPublicModule } from './action-public/action-public.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { RepostModule } from './repost/repost.module';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    RepoPublicModule,
    ActionPublicModule,
    CommentModule,
    LikeModule,
    RepostModule,
    ConfigPublicModule,
    NotifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
