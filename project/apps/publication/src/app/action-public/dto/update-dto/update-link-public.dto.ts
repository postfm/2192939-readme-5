import { ApiProperty } from '@nestjs/swagger';

export class UpdateLinkPublicDto {
  @ApiProperty({
    description: 'Link Publication',
    example: 'https://link.com',
  })
  public link?: string;

  @ApiProperty({
    description: 'Link Public Description',
    example: 'Text text text',
  })
  public description?: string;
}
