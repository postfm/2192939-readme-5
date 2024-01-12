import { Comment } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class PublicRdo {
  @Expose()
  public publicId: string;

  @Expose()
  public userId: string;

  // Repost
  @Expose()
  public isRepost: boolean;

  @Expose()
  public originalUserId: string;

  @Expose()
  public originalPublicId: string;

  // VideoPublic
  @Expose()
  public title: string;

  @Expose()
  public video: string;

  // TextPublic
  @Expose()
  public header: string;

  @Expose()
  public notice: string;

  @Expose()
  public text: string;

  // QuotePublic
  @Expose()
  public quote: string;

  @Expose()
  public author: string;

  // PhotoPublic
  @Expose()
  public photo: string;

  // LinkPublic
  @Expose()
  public link: string;

  @Expose()
  public description: string;

  // Common
  @Expose()
  public tags: string[];

  @Expose()
  public comments: Comment[];

  // Service
  @Expose()
  public createAt: string;

  @Expose()
  public publicType: string;

  @Expose()
  public publicStatus: string;
}
