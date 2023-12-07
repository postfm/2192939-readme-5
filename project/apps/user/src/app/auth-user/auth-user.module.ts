import { Module } from '@nestjs/common';
import { AuthUserController } from './auth-user.controller';
import { AuthUserService } from './auth-user.service';
import { PublicUserModule } from '../public-user/public-user.module';

@Module({
  imports: [PublicUserModule],
  controllers: [AuthUserController],
  providers: [AuthUserService],
})
export class AuthUserModule {}
