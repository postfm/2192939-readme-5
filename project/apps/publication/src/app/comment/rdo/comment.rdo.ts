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

  @Expose()
  @ApiProperty({
    description: 'User ID',
    example: '1234',
  })
  public userId: string;

  @Expose()
  @ApiProperty({
    description: 'Create Date',
    example: '2024-01-01',
  })
  public createAt: Date;
}
