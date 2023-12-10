import { Module } from '@nestjs/common';
import { RepoPublicRepository } from './repo-public.repository';

@Module({
  providers: [RepoPublicRepository],
  exports: [RepoPublicRepository],
})
export class RepoPublicModule {}
