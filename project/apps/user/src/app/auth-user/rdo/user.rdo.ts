import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  public id!: string;

  @Expose()
  @ApiProperty({
    description: 'User email',
    example: 'user@host.local',
  })
  public email!: string;

  @Expose()
  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  public name!: string;

  @Expose()
  @ApiProperty({
    description: 'User avatar',
    example: '/images/user.png',
  })
  public avatar!: string;

  @ApiProperty({
    description: 'User registration date',
  })
  @Expose({ name: 'createdAt' })
  public createAt!: string;

  @ApiProperty({
    description: 'User posts amount',
    example: '0',
  })
  @Expose()
  public publicsCount: number = 0;

  @ApiProperty({
    description: 'User subscribers amount',
    example: '0',
  })
  @Expose()
  public subscribersCount: number = 0;

  @ApiProperty({
    description: 'User subscribers',
    example: ['123', '1234'],
  })
  @Expose()
  public subscribers: string[] = [''];

  @ApiProperty({
    description: 'User subscription',
    example: ['123', '1234'],
  })
  @Expose()
  public subscriptions: string[] = [''];
}
