import { Injectable } from '@nestjs/common';
import { PublicUserEntity } from './public-user.entity';
import {
  BaseMemoryRepository,
  BaseMongoRepository,
} from '@project/shared/core';
import { PublicUserModel } from './public-user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PublicUserRepository extends BaseMongoRepository<
  PublicUserEntity,
  PublicUserModel
> {
  constructor(
    @InjectModel(PublicUserModel.name) publicUserModel: Model<PublicUserModel>
  ) {
    super(publicUserModel, PublicUserEntity.fromObject);
  }
  public async findByEmail(
    email: string
  ): Promise<PublicUserEntity | undefined> {
    const document = await this.model.findOne({ email }).exec();

    return this.createEntityFromDocument(document);
  }
}
