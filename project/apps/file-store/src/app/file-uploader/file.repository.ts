import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileModel } from './file.model';
import { FileEntity } from './file.entity';
import { BaseMongoRepository } from '@project/shared/core';
import { Model } from 'mongoose';

@Injectable()
export class FileRepository extends BaseMongoRepository<FileEntity, FileModel> {
  constructor(@InjectModel(FileModel.name) fileModel: Model<FileModel>) {
    super(fileModel, FileEntity.fromObject);
  }
}
