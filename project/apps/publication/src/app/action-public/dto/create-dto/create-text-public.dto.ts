import { ApiProperty } from '@nestjs/swagger';
import { TextPublicInterface } from '@project/shared/app/types';

export class CreateTextPublicDto implements TextPublicInterface {
  @ApiProperty({
    description: 'Text Publication ID',
    example: '123',
  })
  public id?: string;

  @ApiProperty({
    description: 'Text Publication Title',
    example: 'Text Publication',
  })
  public title: string;

  @ApiProperty({
    description: 'Text Publication Notice',
    example: 'Publication about..',
  })
  public notice: string;

  @ApiProperty({
    description: 'Text Publication Content',
    example: 'Text text text',
  })
  public text: string;
}
