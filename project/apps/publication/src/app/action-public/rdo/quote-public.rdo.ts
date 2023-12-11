import { ApiProperty } from '@nestjs/swagger';
import { QuotePublicInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class QuotePublicRdo implements QuotePublicInterface {
  @Expose()
  @ApiProperty({
    description: 'Quote Publication ID',
    example: '123',
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'Quote Publication Content',
    example: 'Text text text',
  })
  public quote: string;

  @Expose()
  @ApiProperty({
    description: 'Quote Publication Author',
    example: 'John',
  })
  public author: string;
}
