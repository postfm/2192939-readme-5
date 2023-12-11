import { ApiProperty } from '@nestjs/swagger';
import { CommentInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class CreateCommentDto implements CommentInterface {
  @Expose()
  @ApiProperty({
    description: 'Comment ID',
    example: '123',
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'Publication ID',
    example: '123',
  })
  public publicId: string;

  @Expose()
  @ApiProperty({
    description: 'Comment Content',
    example: 'Text text text',
  })
  public text: string;
}
