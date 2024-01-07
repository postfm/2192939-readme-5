import { Entity } from '@project/shared/core';

export interface Comment extends Entity<string> {
  commentId?: string;
  text: string;
  userId: string;
  publicId: string;
  createAt?: Date;
  updateAt?: Date;
}
