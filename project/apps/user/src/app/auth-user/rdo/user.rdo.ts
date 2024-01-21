import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

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
  @Transform(({ obj }) => obj.createdAt.toString())
  public createAt!: string;

  @ApiProperty({
    description: 'User posts amount',
    example: '0',
  })
  @Expose()
  public publicsCount!: number;

  @ApiProperty({
    description: 'User subscribers amount',
    example: '0',
  })
  @Expose()
  public subscribersCount!: number;
}
