import { Injectable } from '@nestjs/common';
import { EmailSubscriberRepository } from './email-subscriber.repository';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { EmailSubscriberEntity } from './email-subscriber.entity';

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
}
