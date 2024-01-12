import { IsIn, IsNumber, IsOptional } from 'class-validator';
import {
  DEFAULT_PAGE_COUNT,
  DEFAULT_POST_COUNT_LIMIT,
  DEFAULT_PUBLIC_STATUS,
  DEFAULT_SORT_DIRECTION,
} from './../repo-public.constants';
import { Transform } from 'class-transformer';
import { SortDirection } from '@project/shared/app/types';

export class PublicQuery {
  @Transform(({ value }) => +value || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @IsIn(Object.values(SortDirection))
  @IsOptional()
  public SortDirection: SortDirection = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value || DEFAULT_PAGE_COUNT)
  @IsOptional()
  public page: number = DEFAULT_PAGE_COUNT;

  @IsOptional()
  public userId: string;

  @IsOptional()
  public publicType: string;

  @IsOptional()
  public tag: string;

  @Transform(({ value }) => value || DEFAULT_PUBLIC_STATUS)
  @IsOptional()
  public publicStatus: string;
}
