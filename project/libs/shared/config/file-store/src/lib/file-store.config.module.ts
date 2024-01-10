import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import fileStoreConfig from './file-store.config';

const ENV_FILE_PATH = 'apps/file-store/.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [fileStoreConfig],
      envFilePath: ENV_FILE_PATH,
    }),
  ],
})
export class FileStoreConfigModule {}
