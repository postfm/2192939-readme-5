import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuotePublicDto {
  @ApiProperty({
    description: 'Quote Publication Content',
    example: 'Text text text',
  })
  public quote?: string;

  @ApiProperty({
    description: 'Quote Publication Author',
    example: 'John',
  })
  public author?: string;
}
