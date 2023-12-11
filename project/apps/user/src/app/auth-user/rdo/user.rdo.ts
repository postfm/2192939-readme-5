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
}
