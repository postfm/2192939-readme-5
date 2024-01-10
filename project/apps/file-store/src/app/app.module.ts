import { Module } from '@nestjs/common';

import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { FileStoreConfigModule } from '@project/shared/config/file-store';

@Module({
  imports: [FileUploaderModule, FileStoreConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
