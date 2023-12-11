import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoPublicDto {
  @ApiProperty({
    description: 'Video Publication ID',
    example: '123',
  })
  public id?: string;

  @ApiProperty({
    description: 'Video Publication Text',
    example: 'Text text text',
  })
  public title: string;

  @ApiProperty({
    description: 'Vide Publication link',
    example: 'https://youtube.com/shsjd',
  })
  public link: string;
}
