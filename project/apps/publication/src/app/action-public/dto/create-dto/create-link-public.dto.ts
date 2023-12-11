import { ApiProperty } from '@nestjs/swagger';
import { LinkPublicInterface } from '@project/shared/app/types';

export class CreateLinkPublicDto implements LinkPublicInterface {
  @ApiProperty({
    description: 'Publication ID',
    example: '123',
  })
  public id?: string;

  @ApiProperty({
    description: 'Publication link',
    example: 'https//link.com',
  })
  public link!: string;

  @ApiProperty({
    description: 'Public description',
    example: 'Description',
  })
  public description?: string;
}
