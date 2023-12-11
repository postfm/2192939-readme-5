import { ApiProperty } from '@nestjs/swagger';

export class UpdatePhotoPublicDto {
  @ApiProperty({
    description: 'Photo Publication Content',
    example: 'https://image.jpg',
  })
  public photo?: string;
}
