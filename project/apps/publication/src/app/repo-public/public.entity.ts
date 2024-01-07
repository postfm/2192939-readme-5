import { Public } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class PublicEntity implements Public, Entity<string, Public> {
  public publicId?: string;
  public userId: string;

  // Repost
  public isRepost: boolean;
  public originalUserId: string;
  public originalPublicId: string;

  // VideoPublic
  public title?: string;
  public video?: string;

  // TextPublic
  public header?: string;
  public notice?: string;
  public text?: string;

  // QuotePublic
  public quote?: string;
  public author?: string;

  // PhotoPublic
  public photo?: string;

  // LinkPublic
  public link?: string;
  public description?: string;

  // Common
  public tags?: string[];
  public comments: CommentEntity[];

  public createAt?: Date;
  public updateAt?: Date;

  public publicType: string;
  public publicStatus: string;

  public populate(data: Public): PublicEntity {
    this.publicId = data.publicId ?? undefined;
    this.userId = data.userId;

    // Repost
    this.isRepost = data.isRepost;
    this.originalUserId = data.originalUserId;
    this.originalPublicId = data.originalPublicId;

    // VideoPublic
    this.title = data.title ?? undefined;
    this.video = data.video ?? undefined;

    // TextPublic
    this.header = data.header ?? undefined;
    this.notice = data.notice ?? undefined;
    this.text = data.text ?? undefined;

    // QuotePublic
    this.quote = data.quote ?? undefined;
    this.author = data.author ?? undefined;

    // PhotoPublic
    this.photo = data.photo ?? undefined;

    // LinkPublic
    this.link = data.link ?? undefined;
    this.description = data.description ?? undefined;

    // Common
    this.tags = data.tags ?? undefined;
    this.comments = [];

    this.createAt = data.createAt ?? undefined;
    this.updateAt = data.updateAt ?? undefined;

    this.publicType = data.publicType;
    this.publicStatus = data.publicStatus;

    return this;
  }
}
