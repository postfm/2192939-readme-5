import { Subscriber } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class EmailSubscriberEntity
  implements Subscriber, Entity<string, Subscriber>
{
  public id?: string;
  public email: string;
  public name: string;
  public dateNotify?: string;

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      dateNotify: this.dateNotify,
    };
  }

  public populate(data: Subscriber): EmailSubscriberEntity {
    this.id = data.id ?? undefined;
    this.email = data.email;
    this.name = data.name;
    this.dateNotify = data.dateNotify ?? new Date(1970, 0, 1).toISOString();

    return this;
  }

  static fromObject(data: Subscriber): EmailSubscriberEntity {
    return new EmailSubscriberEntity().populate(data);
  }
}
