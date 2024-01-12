import { Comment } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { CreateCommentDto } from './dto/create-comment.dto';

export class CommentEntity implements Comment, Entity<string, Comment> {
  public commentId?: string;
  public publicId: string;
  public userId: string;
  public text: string;
  public createdAt: Date;
  public updatedAt: Date;

  public toPOJO(): Comment {
    return {
      commentId: this.commentId,
      publicId: this.publicId,
      userId: this.userId,
      text: this.text,
      createAt: this.createdAt,
      updateAt: this.updatedAt,
    };
  }

  public populate(data: Comment) {
    this.commentId = data.commentId ?? undefined;
    this.publicId = data.publicId;
    this.userId = data.userId;
    this.text = data.text;
    this.createdAt = data.createAt;
    this.updatedAt = data.updateAt;

    return this;
  }

  static fromObject(data: Comment): CommentEntity {
    return new CommentEntity().populate(data);
  }

  static fromDto(dto: CreateCommentDto, publicId: string): CommentEntity {
    return new CommentEntity().populate({
      ...dto,
      publicId,
      createAt: new Date(),
      updateAt: new Date(),
    });
  }
}
