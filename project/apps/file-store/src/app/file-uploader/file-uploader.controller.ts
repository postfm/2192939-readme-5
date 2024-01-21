import { MongoIdValidationPipe } from './../../../../../libs/shared/core/src/lib/pipes/mongo-id-validation.pipe';
import 'multer';
import { Express } from 'express';
import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FileUploaderService } from './file-uploader.service';
import { fillDto } from '@project/shared/helpers';
import { UploadedFileRdo } from './rdo/uploaded-file.rdo';
import { FileUploaderPipe } from './pipes/file-uploader.pipes';

@Controller('files')
export class FileUploaderController {
  constructor(private readonly fileUploaderService: FileUploaderService) {}

  @Post('/upload/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  public async uploadAvatar(
    @UploadedFile(FileUploaderPipe) file: Express.Multer.File
  ) {
    const fileEntity = await this.fileUploaderService.saveFile(file, 'avatar');
    return fillDto(UploadedFileRdo, fileEntity.toPOJO());
  }

  @Post('/upload/photo')
  @UseInterceptors(FileInterceptor('photo'))
  public async uploadPhoto(
    @UploadedFile(FileUploaderPipe) file: Express.Multer.File
  ) {
    const fileEntity = await this.fileUploaderService.saveFile(file, 'photo');
    return fillDto(UploadedFileRdo, fileEntity.toPOJO());
  }

  @Get(':fileId')
  public async show(@Param('fileId', MongoIdValidationPipe) fileId: string) {
    const existFile = await this.fileUploaderService.getFile(fileId);
    return fillDto(UploadedFileRdo, existFile);
  }
}
