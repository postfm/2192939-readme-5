import { Module } from '@nestjs/common';
import { AuthUserModule } from './auth-user/auth-user.module';
import { PublicUserModule } from './public-user/public-user.module';

@Module({
  imports: [AuthUserModule, PublicUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
