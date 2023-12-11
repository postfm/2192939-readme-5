import { CreateLinkPublicDto } from './create-link-public.dto';
import { CreatePhotoPublicDto } from './create-photo-public.dto';
import { CreateQuotePublicDto } from './create-quote-public.dto';
import { CreateTextPublicDto } from './create-text-public.dto';
import { CreateVideoPublicDto } from './create-video-public.dto';

export type CreateCommonPublicDto =
  | CreateLinkPublicDto
  | CreatePhotoPublicDto
  | CreateQuotePublicDto
  | CreateTextPublicDto
  | CreateVideoPublicDto;
