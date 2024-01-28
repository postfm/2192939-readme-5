import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PublicController } from './public.controller';

@Module({
  imports: [],
  controllers: [],
  providers: [UserController, PublicController],
})
export class AppModule {}
