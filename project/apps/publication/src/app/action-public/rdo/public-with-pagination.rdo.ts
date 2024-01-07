import { Expose } from 'class-transformer';
import { PublicRdo } from './public.rdo';

export class PublicWithPaginationRdo {
  @Expose()
  public entities: PublicRdo[];

  @Expose()
  public totalPages: number;

  @Expose()
  public totalItems: number;

  @Expose()
  public currentPage: number;

  @Expose()
  public itemsPerPage: number;
}
