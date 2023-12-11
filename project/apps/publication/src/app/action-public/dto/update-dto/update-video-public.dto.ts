import { ApiProperty } from '@nestjs/swagger';

export class UpdateVideoPublicDto {
  @ApiProperty({
    description: 'Video Publication Title',
    example: 'Title Publication',
  })
  public title?: string;

  @ApiProperty({
    description: 'Video Publication Link',
    example: 'https://link.com',
  })
  public link?: string;
}
