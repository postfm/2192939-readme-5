import { UpdateLinkPublicDto } from './update-link-public.dto';
import { UpdatePhotoPublicDto } from './update-photo-public.dto';
import { UpdateQuotePublicDto } from './update-quote-public.dto';
import { UpdateTextPublicDto } from './update-text-public.dto';
import { UpdateVideoPublicDto } from './update-video-public.dto';

export type UpdateCommonPublicDto =
  | UpdateLinkPublicDto
  | UpdatePhotoPublicDto
  | UpdateQuotePublicDto
  | UpdateTextPublicDto
  | UpdateVideoPublicDto;
