import { ApiProperty } from '@nestjs/swagger';
import { VideoPublicInterface } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class VideoPublicRdo implements VideoPublicInterface {
  @Expose()
  @ApiProperty({
    description: 'Video Publication ID',
    example: '123',
  })
  public id?: string;

  @Expose()
  @ApiProperty({
    description: 'Video Publication Title',
    example: 'Publication Title',
  })
  public title: string;

  @Expose()
  @ApiProperty({
    description: 'Video Publication Content',
    example: 'https://link.com',
  })
  public link: string;
}
