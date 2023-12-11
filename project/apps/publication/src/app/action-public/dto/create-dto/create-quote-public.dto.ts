import { ApiProperty } from '@nestjs/swagger';
import { QuotePublicInterface } from '@project/shared/app/types';

export class CreateQuotePublicDto implements QuotePublicInterface {
  @ApiProperty({
    description: 'Publication ID',
    example: '123',
  })
  public id?: string;

  @ApiProperty({
    description: 'Quote Publication text',
    example: 'Text',
  })
  public quote: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'John',
  })
  public author: string;
}
