import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsEmail()
  @ApiProperty({
    description: 'User Email',
    example: 'keks@mail.local',
  })
  public email: string;

  @IsString()
  @ApiProperty({
    description: 'User Name',
    example: 'Keks',
  })
  public name: string;
}
