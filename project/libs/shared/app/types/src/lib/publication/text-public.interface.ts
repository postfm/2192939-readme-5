import { Entity } from '@project/shared/core';

export interface TextPublicInterface extends Entity<string> {
  title: string;
  notice: string;
  text: string;
}
