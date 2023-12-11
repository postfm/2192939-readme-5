import { PublicType } from '@project/shared/app/types';
import { fillDto } from '@project/shared/helpers';
import { LinkPublicRdo } from './link-public.rdo';
import { CommonPublicEntity } from '../../repo-public/entity/common-public.entity';
import { PhotoPublicRdo } from './photo-public.rdo';
import { QuotePublicRdo } from './quote-public.rdo';
import { TextPublicRdo } from './text-public.rdo';
import { VideoPublicRdo } from './video-public.rdo';

export function adaptPublicRdo(
  publicType: string,
  publicEntity: CommonPublicEntity
) {
  switch (publicType) {
    case PublicType.Link:
      return fillDto(LinkPublicRdo, publicEntity.toPOJO());
    case PublicType.Photo:
      return fillDto(PhotoPublicRdo, publicEntity.toPOJO());
    case PublicType.Quote:
      return fillDto(QuotePublicRdo, publicEntity.toPOJO());
    case PublicType.Text:
      return fillDto(TextPublicRdo, publicEntity.toPOJO());
    case PublicType.Video:
      return fillDto(VideoPublicRdo, publicEntity.toPOJO());
  }
}
