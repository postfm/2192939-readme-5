import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const ENV_USER_FILE_PATH = 'apps/user/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      // TODO: Передать список конфигураций для загрузки
      load: [],
      envFilePath: ENV_USER_FILE_PATH,
    }),
  ],
})
export class ConfigUserModule {}
