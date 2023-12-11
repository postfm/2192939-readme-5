import { CommentInterface } from '@project/shared/app/types';

export class CommentEntity implements CommentInterface {
  public id?: string;
  public publicId: string;
  public text: string;

  constructor(commentData: CommentInterface) {
    this.populate(commentData);
  }

  public toPOJO() {
    return {
      id: this.id,
      publicId: this.publicId,
      text: this.text,
    };
  }

  public populate(data: CommentInterface) {
    this.id = data.id;
    this.publicId = data.publicId;
    this.text = data.text;
  }
}
