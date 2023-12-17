import { Module } from '@nestjs/common';
import { PublicUserRepository } from './public-user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicUserModel, PublicUserSchema } from './public-user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PublicUserModel.name, schema: PublicUserSchema },
    ]),
  ],
  providers: [PublicUserRepository],
  exports: [PublicUserRepository],
})
export class PublicUserModule {}
