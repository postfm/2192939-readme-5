import { PhotoPublicInterface } from '@project/shared/app/types';

export class CreatePhotoPublicDto implements PhotoPublicInterface {
  public id?: string;
  public photo!: string;
}
