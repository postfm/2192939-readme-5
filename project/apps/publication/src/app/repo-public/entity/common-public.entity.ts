import { LinkPublicEntity } from './link-public.entity';
import { PhotoPublicEntity } from './photo-public.entity';
import { QuotePublicEntity } from './quote-public.entity';
import { TextPublicEntity } from './text-public.entity';
import { VideoPublicEntity } from './video-public.entity';

export type CommonPublicEntity =
  | LinkPublicEntity
  | PhotoPublicEntity
  | QuotePublicEntity
  | TextPublicEntity
  | VideoPublicEntity;
