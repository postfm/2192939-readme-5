import { Module } from '@nestjs/common';
import { PublicUserRepository } from './public-user.repository';

@Module({
  providers: [PublicUserRepository],
  exports: [PublicUserRepository],
})
export class PublicUserModule {}
