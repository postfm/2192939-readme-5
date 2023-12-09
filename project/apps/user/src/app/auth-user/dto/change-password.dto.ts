import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Old User Password',
    example: '123456',
  })
  public oldPassword: string;

  @ApiProperty({
    description: 'New User Password',
    example: '654321',
  })
  public newPassword: string;
}
