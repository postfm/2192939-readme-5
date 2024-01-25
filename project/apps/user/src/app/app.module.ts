import {
  ConfigUserModule,
  getMongooseOptions,
} from '@project/shared/config/user';
import { Module } from '@nestjs/common';
import { AuthUserModule } from './auth-user/auth-user.module';
import { PublicUserModule } from './public-user/public-user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifyModule } from './notify/notify.module';

@Module({
  imports: [
    AuthUserModule,
    PublicUserModule,
    ConfigUserModule,
    NotifyModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
