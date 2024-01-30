import { ApiProperty } from '@nestjs/swagger';
import { MaxLengthCheck, MinLengthCheck } from '@project/shared/helpers';
import { IsMongoId, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @MinLength(MinLengthCheck.CommentText)
  @MaxLength(MaxLengthCheck.CommentText)
  @ApiProperty({
    description: 'Comment Content',
    example: 'Text text text',
  })
  public text: string;

  @IsMongoId()
  @ApiProperty({
    description: 'User ID',
    example: '123',
  })
  public userId: string;
}
