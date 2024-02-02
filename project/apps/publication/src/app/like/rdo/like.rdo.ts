import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LikeRdo {
  @ApiProperty({
    description: 'Like ID',
    example: '123',
  })
  @Expose()
  public likeId: string;

  @ApiProperty({
    description: 'Publication ID',
    example: '123',
  })
  @Expose()
  public publicId: string;

  @ApiProperty({
    description: 'User ID',
    example: '1234',
  })
  @Expose()
  public userId: string;
}
