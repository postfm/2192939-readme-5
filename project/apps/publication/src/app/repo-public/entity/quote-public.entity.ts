import { QuotePublicInterface } from '@project/shared/app/types';

export class QuotePublicEntity implements QuotePublicInterface {
  public id?: string;
  public quote: string;
  public author: string;

  constructor(publicData: QuotePublicInterface) {
    this.populate(publicData);
  }

  public toPOJO() {
    return {
      quote: this.quote,
      author: this.author,
    };
  }

  public populate(data: QuotePublicInterface): void {
    this.quote = data.quote;
    this.author = data.author;
  }
}
