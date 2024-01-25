import { Expose } from 'class-transformer';
import { PublicRdo } from './public.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PublicWithPaginationRdo {
  @ApiProperty({
    description: 'Entity Public Dto',
  })
  @Expose()
  public entities: PublicRdo[];

  @ApiProperty({
    description: 'Total Pages',
    example: '10',
  })
  @Expose()
  public totalPages: number;

  @ApiProperty({
    description: 'Total Items',
    example: '100',
  })
  @Expose()
  public totalItems: number;

  @ApiProperty({
    description: 'Current Page',
    example: '1',
  })
  @Expose()
  public currentPage: number;

  @ApiProperty({
    description: 'Items Per Page',
    example: '10',
  })
  @Expose()
  public itemsPerPage: number;
}
