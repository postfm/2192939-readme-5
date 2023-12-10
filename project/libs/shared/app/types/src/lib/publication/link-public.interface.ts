import { Entity } from '@project/shared/core';

export interface LinkPublicInterface extends Entity<string> {
  link: string;
  description?: string;
}
