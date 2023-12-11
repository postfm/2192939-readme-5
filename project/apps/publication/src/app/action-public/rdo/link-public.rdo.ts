import { ApiProperty } from '@nestjs/swagger';
import { LinkPublicInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class LinkPublicRdo implements LinkPublicInterface {
  @Expose()
  @ApiProperty({
    description: 'Link Publication ID',
    example: '123',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Link Publication Content',
    example: 'https://link.com',
  })
  public link: string;

  @Expose()
  @ApiProperty({
    description: 'Link Publication Description',
    example: 'Text text text',
  })
  public description?: string;
}
