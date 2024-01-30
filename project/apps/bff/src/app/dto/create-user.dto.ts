import { AUTH_USER_EMAIL_NOT_VALID } from './../../../../user/src/app/auth-user/auth-user.constant';
import { MaxLengthCheck } from '@project/shared/helpers';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { MinLengthCheck } from 'libs/shared/helpers/src/lib/dto.constants';

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
}
