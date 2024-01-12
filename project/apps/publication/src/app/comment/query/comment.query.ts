import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { SortDirection } from '@project/shared/app/types';
import {
  DEFAULT_PAGE_COUNT,
  DEFAULT_SORT_DIRECTION,
} from '../../repo-public/repo-public.constants';
import { MAX_COMMENTS_COUNT } from '../comment.constants';

export class CommentQuery {
  @Transform(({ value }) => +value || MAX_COMMENTS_COUNT)
  @IsNumber()
  @IsOptional()
  public limit = MAX_COMMENTS_COUNT;

  @IsIn(Object.values(SortDirection))
  @IsOptional()
  public SortDirection: SortDirection = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value || DEFAULT_PAGE_COUNT)
  @IsOptional()
  public page: number = DEFAULT_PAGE_COUNT;

  @IsOptional()
  publicId: string;
}
