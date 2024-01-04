import { Entity } from '@project/shared/core';

export interface Tag extends Entity<string> {
  title: string;
  publicId: string;
}
