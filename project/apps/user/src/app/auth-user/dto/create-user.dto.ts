import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from '../auth-user.constant';
import { MaxLengthCheck, MinLengthCheck } from '@project/shared/helpers';

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
  @MinLength(MinLengthCheck.Name)
  @MaxLength(MaxLengthCheck.Name)
  public name!: string;

  @ApiProperty({
    description: 'User password',
    example: '12345678',
  })
  @IsString()
  @MinLength(MinLengthCheck.Password)
  @MaxLength(MaxLengthCheck.Password)
  public password!: string;

  @IsArray()
  public subscribers: string[];

  @IsArray()
  public subscription: string[];
}
