import { LinkPublicEntity } from './link-public.entity';
import { PhotoPublicEntity } from './photo-public.entity';
import { QuotePublicEntity } from './quote-public.entity';
import { TextPublicEntity } from './text-public.entity';
import { VideoPublicEntity } from './video-public.entity';

export const TypeEntityAdapter = {
  'link': LinkPublicEntity,
  'photo': PhotoPublicEntity,
  'quote': QuotePublicEntity,
  'text': TextPublicEntity,
  'video': VideoPublicEntity,
};
