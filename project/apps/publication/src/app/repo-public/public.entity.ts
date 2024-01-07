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
    this.isRepost = data.isRepost;
    this.originalUserId = data.originalUserId;
    this.originalPublicId = data.originalPublicId;
    this.title = data.title ?? undefined;
    this.video = data.video ?? undefined;
    this.header = data.header ?? undefined;
    this.notice = data.notice ?? undefined;
    this.text = data.text ?? undefined;
    this.quote = data.quote ?? undefined;
    this.author = data.author ?? undefined;
    this.photo = data.photo ?? undefined;
    this.link = data.link ?? undefined;
    this.description = data.description ?? undefined;
    this.tags = data.tags ?? undefined;
    this.comments = [];
    this.createAt = data.createAt ?? undefined;
    this.updateAt = data.updateAt ?? undefined;
    this.publicType = data.publicType;
    this.publicStatus = data.publicStatus;

    return this;
  }

  public toPOJO(): Public {
    return {
      publicId: this.publicId,
      userId: this.userId,
      isRepost: this.isRepost,
      originalUserId: this.originalUserId,
      originalPublicId: this.originalPublicId,
      title: this.title,
      video: this.video,
      header: this.header,
      notice: this.notice,
      text: this.text,
      quote: this.quote,
      author: this.author,
      photo: this.photo,
      link: this.link,
      description: this.description,
      tags: this.tags,
      comments: this.comments,
      updateAt: this.updateAt,
      publicType: this.publicType,
      publicStatus: this.publicStatus,
    };
  }
}
