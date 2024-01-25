import { rabbitConfig } from '@project/shared/config/user';
import { Inject, Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { ConfigType } from '@nestjs/config';
import { RabbitRouting } from '@project/shared/app/types';
import { SendNewsletterDto } from './dto/send-newsletter.dto';

@Injectable()
export class NotifyService {
  constructor(
    private readonly rabbitClient: AmqpConnection,
    @Inject(rabbitConfig.KEY)
    private readonly rabbitOptions: ConfigType<typeof rabbitConfig>
  ) {}

  public async sendNewsletter(dto: SendNewsletterDto) {
    return this.rabbitClient.publish<SendNewsletterDto>(
      this.rabbitOptions.exchange,
      RabbitRouting.SendNewsletter,
      { ...dto }
    );
  }
}
