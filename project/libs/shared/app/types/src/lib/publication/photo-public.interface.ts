import { Entity } from '@project/shared/core';

export interface PhotoPublicInterface extends Entity<string> {
  photo: string;
}
