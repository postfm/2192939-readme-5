import { Controller, HttpStatus } from '@nestjs/common';
import { EmailSubscriberService } from './email-subscribe.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { RabbitRouting } from '@project/shared/app/types';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class EmailSubscriberController {
  constructor(private readonly subscriberService: EmailSubscriberService) {}

  @ApiTags('notify')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  @RabbitSubscribe({
    exchange: 'readme.notify.income',
    routingKey: RabbitRouting.AddSubscriber,
    queue: 'readme.notify.income',
  })
  public async create(subscriber: CreateSubscriberDto) {
    this.subscriberService.addSubscriber(subscriber);
  }
}
