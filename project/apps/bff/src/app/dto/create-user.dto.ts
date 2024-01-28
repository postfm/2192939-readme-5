import { AUTH_USER_EMAIL_NOT_VALID } from './../../../../user/src/app/auth-user/auth-user.constant';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email',
    example: 'user@host.local',
  })
  @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
  public email!: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  public name!: string;

  @ApiProperty({
    description: 'User password',
    example: '12345678',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  public password!: string;
}
