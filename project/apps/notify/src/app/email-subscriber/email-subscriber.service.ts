import { Injectable } from '@nestjs/common';
import { EmailSubscriberRepository } from './email-subscriber.repository';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailSubscriberEntity } from './email-subscriber.entity';
import { Subscriber } from '@project/shared/app/types';

@Injectable()
export class EmailSubscriberService {
  constructor(
    private readonly emailSubscriberRepository: EmailSubscriberRepository
  ) {}

  public async addSubscriber(subscriber: CreateSubscriberDto) {
    const { email } = subscriber;
    const existSubscriber = await this.emailSubscriberRepository.findByEmail(
      email
    );

    if (existSubscriber) {
      return existSubscriber;
    }

    return this.emailSubscriberRepository.save(
      new EmailSubscriberEntity().populate(subscriber)
    );
  }

  public async getSubscriber(email: string) {
    return await this.emailSubscriberRepository.findByEmail(email);
  }

  public async updateDateSent(subscriber: Subscriber) {
    const subscriberData = {
      ...subscriber,
      dateNotify: new Date().toISOString(),
    };
    const updatedSubscriber = new EmailSubscriberEntity().populate(
      subscriberData
    );
    return await this.emailSubscriberRepository.update(
      subscriber.id,
      updatedSubscriber
    );
  }
}
