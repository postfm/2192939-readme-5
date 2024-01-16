import { IsEmail, IsNotEmpty } from 'class-validator';
import { EMAIL_NOT_VALID, NAME_IS_EMPTY } from '../email-subscriber.constant';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriberDto {
  @ApiProperty({
    description: 'User email',
    example: 'keks.mail.local',
  })
  @IsEmail({}, { message: EMAIL_NOT_VALID })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'keks',
  })
  @IsNotEmpty({ message: NAME_IS_EMPTY })
  public name: string;
}
