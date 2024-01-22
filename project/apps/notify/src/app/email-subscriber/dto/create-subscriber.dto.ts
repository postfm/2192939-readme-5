import { IsEmail, IsNotEmpty } from 'class-validator';
import { EmailError } from '../email-subscriber.constant';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriberDto {
  @ApiProperty({
    description: 'User email',
    example: 'keks.mail.local',
  })
  @IsEmail({}, { message: EmailError.InvalidEmail })
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'keks',
  })
  @IsNotEmpty({ message: EmailError.EmptyName })
  public name: string;
}
