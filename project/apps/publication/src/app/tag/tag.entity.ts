import { Tag } from '@project/shared/app/types';

export class TagEntity implements Tag {
  public id?: string;
  public title: string;
  public publicId: string;

  constructor(data: Tag) {
    if (!data.title) {
      throw new Error('Category');
    }

    this.populate(data);
  }

  public populate(data: Tag): void {
    this.id = data.id ?? '';
    this.title = data.title;
    this.publicId = data.publicId;
  }

  public toPOJO(): Record<string, unknown> {
    return {
      id: this.id,
      title: this.title,
      publicId: this.publicId,
    };
  }
}
