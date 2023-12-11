import { ApiProperty } from '@nestjs/swagger';
import { PhotoPublicInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class PhotoPublicRdo implements PhotoPublicInterface {
  @Expose()
  @ApiProperty({
    description: 'Photo Publication ID',
    example: '123',
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'Photo Publication Content',
    example: 'https://image.png',
  })
  public photo: string;
}
