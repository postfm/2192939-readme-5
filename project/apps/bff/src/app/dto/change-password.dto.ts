import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

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
  @MinLength(6)
  @MaxLength(12)
  public newPassword!: string;
}
