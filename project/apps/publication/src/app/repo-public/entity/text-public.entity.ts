import { TextPublicInterface } from '@project/shared/app/types';

export class TextPublicEntity implements TextPublicInterface {
  public id?: string;
  public title: string;
  public notice: string;
  public text: string;

  constructor(publicData: TextPublicInterface) {
    this.populate(publicData);
  }

  public toPOJO() {
    return {
      title: this.title,
      notice: this.notice,
      text: this.text,
    };
  }

  public populate(data: TextPublicInterface): void {
    this.title = data.title;
    this.notice = data.notice;
    this.text = data.text;
  }
}
