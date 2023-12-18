import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@project/shared/app/types';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class PublicUserModel extends Document implements User {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  passwordHash: string;

  @Prop()
  avatar: string;
}

export const PublicUserSchema = SchemaFactory.createForClass(PublicUserModel);
