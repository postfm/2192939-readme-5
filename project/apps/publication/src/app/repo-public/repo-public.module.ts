import { Module } from '@nestjs/common';
import { RepoPublicRepository } from './public.repository';

@Module({
  providers: [RepoPublicRepository],
  exports: [RepoPublicRepository],
})
export class RepoPublicModule {}
