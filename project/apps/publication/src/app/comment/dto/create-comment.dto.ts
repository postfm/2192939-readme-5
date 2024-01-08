import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateCommentDto {
  @Expose()
  @ApiProperty({
    description: 'Comment Content',
    example: 'Text text text',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'User ID',
    example: '123',
  })
  public userId: string;
}
