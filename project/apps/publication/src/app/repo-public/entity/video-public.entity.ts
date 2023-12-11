import { VideoPublicInterface } from '@project/shared/app/types';

export class VideoPublicEntity implements VideoPublicInterface {
  public id?: string;
  public title: string;
  public link: string;

  constructor(publicData: VideoPublicInterface) {
    this.populate(publicData);
  }

  public toPOJO() {
    return {
      title: this.title,
      link: this.link,
    };
  }

  public populate(data: VideoPublicInterface): void {
    this.title = data.title;
    this.link = data.link;
  }
}
