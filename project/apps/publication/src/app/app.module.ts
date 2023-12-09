import { Module } from '@nestjs/common';
import { RepoPublicModule } from './repo-public/repo-public.module';
import { ActionPublicModule } from './action-public/action-public.module';

@Module({
  imports: [RepoPublicModule, ActionPublicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
