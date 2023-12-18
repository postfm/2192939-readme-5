import { Module } from '@nestjs/common';
import { PublicUserRepository } from './public-user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicUserModel, PublicUserSchema } from './public-user.model';
import { PublicUserRepositoryToken } from './public-user.token';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PublicUserModel.name, schema: PublicUserSchema },
    ]),
  ],
  providers: [
    {
      provide: PublicUserRepositoryToken,
      useClass: PublicUserRepository,
    },
  ],
  exports: [PublicUserRepositoryToken],
})
export class PublicUserModule {}
