import { NotifyModule } from './../notify/notify.module';
import { Module } from '@nestjs/common';
import { AuthUserController } from './auth-user.controller';
import { AuthUserService } from './auth-user.service';
import { PublicUserModule } from '../public-user/public-user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '@project/shared/config/user';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';

@Module({
  imports: [
    PublicUserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    NotifyModule,
    RefreshTokenModule,
  ],
  controllers: [AuthUserController],
  providers: [
    AuthUserService,
    JwtAccessStrategy,
    LocalStrategy,
    JwtRefreshStrategy,
  ],
})
export class AuthUserModule {}
