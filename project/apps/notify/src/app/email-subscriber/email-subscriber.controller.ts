import { Controller, HttpStatus } from '@nestjs/common';
import { EmailSubscriberService } from './email-subscriber.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitRouting } from '@project/shared/app/types';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MailService } from '../mail/mail.service';
import { NewsletterDto } from './dto/newsletter.dto';
import { getNewPublic } from './utils/get-new-public';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
    private readonly mailService: MailService
  ) {}

  @ApiTags('notify')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @RabbitSubscribe({
    exchange: 'readme.notify.income',
    routingKey: RabbitRouting.AddSubscriber,
    queue: 'readme.notify.subscriber',
  })
  public async create(subscriber: CreateSubscriberDto) {
    this.subscriberService.addSubscriber(subscriber);
    this.mailService.sendNotifyNewSubscriber(subscriber);
  }

  @RabbitSubscribe({
    exchange: 'readme.notify',
    routingKey: RabbitRouting.SendNewsletter,
    queue: 'readme.notify.newsletter',
  })
  public async sendNewsletter(dto: NewsletterDto) {
    const { email, publics } = dto;
    const recipient = await this.subscriberService.getSubscriber(email);
    if (recipient && publics.length > 0) {
      const newPublics = getNewPublic(dto, recipient);

      if (newPublics.length > 0) {
        await this.mailService.sendNewsletter(recipient.email, newPublics);
        await this.subscriberService.updateDateSent(recipient);
      }
    }
  }
}
