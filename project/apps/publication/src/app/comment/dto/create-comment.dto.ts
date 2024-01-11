import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @MinLength(10)
  @MaxLength(300)
  @ApiProperty({
    description: 'Comment Content',
    example: 'Text text text',
  })
  public text: string;

  @IsString()
  @ApiProperty({
    description: 'User ID',
    example: '123',
  })
  public userId: string;
}
