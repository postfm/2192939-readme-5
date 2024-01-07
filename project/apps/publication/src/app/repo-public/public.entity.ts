import { Public } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class PublicEntity implements Public, Entity<string, Public> {
  public userId: string;

  // Repost
  public isRepost: boolean;
  public originalUserId: string;
  public originalPublicId: string;

  // VideoPublic
  public title: string;
  public video: string;

  // TextPublic
  public header: string;
  public notice: string;
  public text: string;

  // QuotePublic
  public quote: string;
  public author: string;

  // PhotoPublic
  public photo: string;

  // LinkPublic
  public link: string;
  public description: string;

  // Common
  public tags: string[];
  public comments: CommentEntity[];

  public createAt: Date;
  public updateAt: Date;

  public publicType: string;
  public publicStatus: string;
}
