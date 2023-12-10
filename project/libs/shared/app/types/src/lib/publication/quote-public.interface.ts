import { Entity } from '@project/shared/core';

export interface QuotePublicInterface extends Entity<string> {
  quote: string;
  author: string;
}
