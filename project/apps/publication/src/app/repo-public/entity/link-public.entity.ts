import { LinkPublicInterface } from '@project/shared/app/types';

export class LinkPublicEntity implements LinkPublicInterface {
  public id?: string;
  public link: string;
  public description?: string;

  constructor(publicData: LinkPublicInterface) {
    this.populate(publicData);
  }

  public toPOJO() {
    return {
      id:this.id,
      link: this.link,
      description: this.description,
    };
  }

  public populate(data: LinkPublicInterface): void {
    this.id = data.id;
    this.link = data.link;
    this.description = data.description;
  }
}
