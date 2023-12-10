import { LinkPublicInterface } from './link-public.interface';
import { PhotoPublicInterface } from './photo-public.interface';
import { QuotePublicInterface } from './quote-public.interface';
import { TextPublicInterface } from './text-public.interface';
import { VideoPublicInterface } from './video-public.interface';

export type CommonTypePublic =
  | LinkPublicInterface
  | PhotoPublicInterface
  | QuotePublicInterface
  | TextPublicInterface
  | VideoPublicInterface;
