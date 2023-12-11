import { ApiProperty } from '@nestjs/swagger';
import { PhotoPublicInterface } from '@project/shared/app/types';

export class CreatePhotoPublicDto implements PhotoPublicInterface {
  @ApiProperty({
    description: 'Photo public',
    example: 'http://image.jpg',
  })
  public id?: string;
  public photo!: string;
}
