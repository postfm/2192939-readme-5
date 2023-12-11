import { ApiProperty } from '@nestjs/swagger';
import { TextPublicInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class TextPublicRdo implements TextPublicInterface {
  @Expose()
  @ApiProperty({
    description: 'Text Publication ID',
    example: '123',
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'Text Publication Title',
    example: 'Title Publication',
  })
  public title: string;

  @Expose()
  @ApiProperty({
    description: 'Text Publication Notice',
    example: 'Notice publication',
  })
  public notice: string;

  @Expose()
  @ApiProperty({
    description: 'Text Publication Content',
    example: 'Text text text',
  })
  public text: string;
}
