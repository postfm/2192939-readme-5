import { ApiProperty } from '@nestjs/swagger';
import { MaxLengthCheck, MinLengthCheck } from '@project/shared/helpers';
import { MaxLength, MinLength, IsMongoId } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Old User Password',
    example: '123456',
  })
  public oldPassword!: string;

  @ApiProperty({
    description: 'New User Password',
    example: '654321',
  })
  @MinLength(MinLengthCheck.Password)
  @MaxLength(MaxLengthCheck.Password)
  public newPassword!: string;

  @ApiProperty({
    description: 'User ID',
    example: '654321',
  })
  @IsMongoId()
  public id!: string;
}
