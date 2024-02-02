import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment ID',
    example: '123',
  })
  @Expose()
  public commentId: string;

  @ApiProperty({
    description: 'Publication ID',
    example: '123',
  })
  @Expose()
  public publicId: string;

  @ApiProperty({
    description: 'Comment Content',
    example: 'Text text text',
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'User ID',
    example: '1234',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Create Date',
    example: '2024-01-01',
  })
  @Expose()
  public createAt: Date;
}
