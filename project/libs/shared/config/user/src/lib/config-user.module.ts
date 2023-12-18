import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './app.config';
import mongoConfig from './mongo.config';

const ENV_USER_FILE_PATH = 'apps/user/.env';

/**
 * ConfigUserModule is a NestJS module responsible for configuring the application using the ConfigModule.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      /**
       * The load option specifies the list of configurations to load.
       * In this case, it loads the applicationConfig file.
       */
      load: [applicationConfig, mongoConfig],
      /**
       * The envFilePath option specifies the file path for the environment variables.
       * It is set to ENV_USER_FILE_PATH.
       */
      envFilePath: ENV_USER_FILE_PATH,
    }),
  ],
})
export class ConfigUserModule {}
