import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'User email',
    example: 'user@host.local',
  })
  public email: string;

  @Expose()
  @ApiProperty({
    description: 'Access Token',
    example: 'askdjflk-akwjfk',
  })
  public accessToken: string;
}
