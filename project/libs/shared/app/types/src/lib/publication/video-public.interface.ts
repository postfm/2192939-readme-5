import { Entity } from '@project/shared/core';

export interface VideoPublicInterface extends Entity<string> {
  title: string;
  link: string;
}
