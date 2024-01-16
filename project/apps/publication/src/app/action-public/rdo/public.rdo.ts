import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '@project/shared/app/types';
import { Expose } from 'class-transformer';

export class PublicRdo {
  @ApiProperty({
    description: 'Public ID',
    example: '598b72f1-5500-44c4-8159-c0e827923312',
  })
  @Expose()
  public publicId: string;

  @ApiProperty({
    description: 'User ID',
    example: '658170cbb954e9f5b905ccf4',
  })
  @Expose()
  public userId: string;

  // Repost
  @ApiProperty({
    description: 'Is Repost',
    example: 'true',
  })
  @Expose()
  public isRepost: boolean;

  @ApiProperty({
    description: 'Original User ID',
    example: '658170cbb954e9f5b905ccf4',
  })
  @Expose()
  public originalUserId: string;

  @ApiProperty({
    description: 'Original Public ID',
    example: '598b72f1-5500-44c4-8159-c0e827923312',
  })
  @Expose()
  public originalPublicId: string;

  // VideoPublic
  @ApiProperty({
    description: 'Title',
    example: 'Animals',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Video Link',
    example:
      'https://www.youtube.com/watch?v=2BcYD_F3QrA&list=RD2BcYD_F3QrA&start_radio=1',
  })
  @Expose()
  public video: string;

  // TextPublic
  @ApiProperty({
    description: 'Notice',
    example: 'Text Notice',
  })
  @Expose()
  public notice: string;

  @ApiProperty({
    description: 'Text',
    example: 'Text Text Text',
  })
  @Expose()
  public text: string;

  // QuotePublic
  @ApiProperty({
    description: 'Quote',
    example: 'Text Quote',
  })
  @Expose()
  public quote: string;

  @ApiProperty({
    description: 'Author',
    example: 'Author Name',
  })
  @Expose()
  public author: string;

  // PhotoPublic
  @ApiProperty({
    description: 'photo.jpg',
    example: 'Photo File',
  })
  @Expose()
  public photo: string;

  // LinkPublic
  @ApiProperty({
    description: 'Link',
    example: 'https://htmlacademy.ru/study',
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Description',
    example: 'Text Description',
  })
  @Expose()
  public description: string;

  // Counts
  @ApiProperty({
    description: 'Comments Count',
    example: '100',
  })
  @Expose()
  public commentsCount: number;

  @ApiProperty({
    description: 'Likes Count',
    example: '100',
  })
  @Expose()
  public likesCount: number;

  // Common
  @ApiProperty({
    description: 'Tags',
    example: `['tag1','tag2']`,
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    description: 'Comments Key',
    example: 'jasdk723r623hr',
  })
  @Expose()
  public comments: Comment[];

  // Service
  @ApiProperty({
    description: 'Create Date',
    example: '2024-01-16',
  })
  @Expose()
  public createAt: string;

  @ApiProperty({
    description: 'Public Type',
    example: 'video',
  })
  @Expose()
  public publicType: string;

  @ApiProperty({
    description: 'Public Status',
    example: 'posted',
  })
  @Expose()
  public publicStatus: string;
}
