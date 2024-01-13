import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreatePublicDto {
  @IsString()
  @ApiProperty({
    description: 'User ID',
    example: '1234',
  })
  public userId: string;

  // Repost
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Repost Public',
    example: 'false',
  })
  public isRepost: boolean;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'Original User ID',
    example: '1234',
  })
  public originalUserId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'Original Publication ID',
    example: '1234',
  })
  public originalPublicId: string;

  // VideoPublic
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(20)
  @MaxLength(50)
  @ApiProperty({
    description: 'Video Title',
    example: 'Title',
  })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: 'Video Link',
    example:
      'https://www.youtube.com/watch?v=2BcYD_F3QrA&list=RD2BcYD_F3QrA&start_radio=1',
  })
  public video: string;

  // TextPublic
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(20)
  @MaxLength(50)
  @ApiProperty({
    description: 'Title Text',
    example:
      'Выбранный нами инновационный путь не стал ограничивающим фактором',
  })
  public header: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(50)
  @MaxLength(255)
  @ApiProperty({
    description: 'Text Description',
    example: 'Новый закон накладывает вето на детский заливистый смех',
  })
  public notice: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(100)
  @MaxLength(1024)
  @ApiProperty({
    description: 'Main Text',
    example:
      'Безусловно, сплочённость команды профессионалов способствует повышению качества экспериментов, поражающих по своей масштабности и грандиозности.',
  })
  public text: string;

  // QuotePublic
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(20)
  @MaxLength(300)
  @ApiProperty({
    description: 'Quote Text',
    example:
      'Может показаться странным, но чистосердечное признание облегчает душу',
  })
  public quote: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    description: 'Author Name',
    example:
      'Выбранный нами инновационный путь не стал ограничивающим фактором',
  })
  public author: string;

  // PhotoPublic
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'Photo Link',
    example:
      'https://yandex.ru/images/search?text=%D0%9C%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%B2%D0%B8%D0%BD%D0%BA%D0%B0&nl=1&source=morda',
  })
  public photo: string;

  // LinkPublic
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @IsOptional()
  @ApiProperty({
    description: 'Link Body',
    example: 'https://htmlacademy.ru/study',
  })
  public link: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({
    description: 'Link Description',
    example: 'HTMLAcademy',
  })
  public description: string;

  // Counts
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Comments Count',
    example: '1',
  })
  public commentsCount: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Likes Count',
    example: '1',
  })
  public likesCounts: number;

  // Common
  @ArrayMaxSize(8)
  @MinLength(3, { each: true })
  @MaxLength(10, { each: true })
  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({
    description: 'Tags',
    example: 'Комиксы',
  })
  public tags: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Publication Type',
    example: 'quote',
  })
  public publicType: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Publication Status',
    example: 'posted',
  })
  public publicStatus: string;
}
