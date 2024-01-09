import { Module } from '@nestjs/common';
import { AuthUserController } from './auth-user.controller';
import { AuthUserService } from './auth-user.service';
import { PublicUserModule } from '../public-user/public-user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@project/shared/config/user';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    PublicUserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [AuthUserController],
  providers: [AuthUserService, JwtAccessStrategy],
})
export class AuthUserModule {}
