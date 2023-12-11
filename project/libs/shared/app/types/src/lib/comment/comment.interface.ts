import { Entity } from '@project/shared/core';

export interface CommentInterface extends Entity<string> {
  publicId: string;
  text: string;
}
