import { Public } from '@project/shared/app/types';

export class SendNewsletterDto {
  public id: string;
  public email: string;
  public publics: Public[];
}
