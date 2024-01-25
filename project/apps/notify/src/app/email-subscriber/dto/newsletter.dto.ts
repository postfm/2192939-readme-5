import { IsArray, IsEmail, IsString } from 'class-validator';
import { EmailError } from '../email-subscriber.constant';
import { Public } from '@project/shared/app/types';

export class NewsletterDto {
  @IsEmail({}, { message: EmailError.InvalidEmail })
  public email: string;

  @IsArray()
  public publics: Public[];

  @IsString()
  public id: string;
}
