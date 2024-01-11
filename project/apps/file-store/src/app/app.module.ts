import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { FileUploaderModule } from './file-uploader/file-uploader.module';
import {
  FileStoreConfigModule,
  getMongooseOptions,
} from '@project/shared/config/file-store';

@Module({
  imports: [
    FileUploaderModule,
    FileStoreConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
