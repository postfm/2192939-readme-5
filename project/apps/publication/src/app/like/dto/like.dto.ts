import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class LikeDto {
  @IsMongoId()
  @ApiProperty({
    description: 'User ID',
    example: '123',
  })
  public userId: string;
}
