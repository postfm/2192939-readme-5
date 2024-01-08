import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
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

  public userId: string;

  public createAt: Date;
}
