import { PhotoPublicInterface } from '@project/shared/app/types';

export class PhotoPublicEntity implements PhotoPublicInterface {
  public id?: string;
  public photo: string;

  constructor(publicData: PhotoPublicInterface) {
    this.populate(publicData);
  }

  public toPOJO() {
    return {
      photo: this.photo,
    };
  }

  public populate(data: PhotoPublicInterface): void {
    this.photo = data.photo;
  }
}
