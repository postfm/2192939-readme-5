import { ApiProperty } from '@nestjs/swagger';

export class UpdateTextPublicDto {
  @ApiProperty({
    description: 'Text Publication Title',
    example: 'Title publication',
  })
  public title?: string;

  @ApiProperty({
    description: 'Text Publication Notice',
    example: 'Text notice',
  })
  public notice?: string;

  @ApiProperty({
    description: 'Text Publication Content',
    example: 'Text text text',
  })
  public text?: string;
}
