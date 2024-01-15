import { fillDto } from '@project/shared/helpers';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RepoPublicRepository } from '../repo-public/repo-public.repository';
import { CreatePublicDto } from './dto/create-dto/create-public.dto';
import { PublicEntity } from '../repo-public/repo-public.entity';
import { PublicQuery } from '../repo-public/query/public.query';
import { PaginationResult } from '@project/shared/app/types';
import { UpdatePublicDto } from './dto/update-dto/update-public.dto';
import { INIT_COUNT_VALUE } from '../repo-public/repo-public.constants';
import { SearchQuery } from '../repo-public/query/search.query';

@Injectable()
export class ActionPublicService {
  constructor(private readonly publicRepository: RepoPublicRepository) {}

  public async createPublic(dto: CreatePublicDto): Promise<PublicEntity> {
    const newPublic = PublicEntity.fromDto(dto);
    await this.publicRepository.save(newPublic);

    return newPublic;
  }

  public async getPublics(
    query?: PublicQuery
  ): Promise<PaginationResult<PublicEntity>> {
    return this.publicRepository.find(query);
  }

  public async getPublic(id: string): Promise<PublicEntity> {
    return this.publicRepository.findById(id);
  }

  public async changePublic(
    id: string,
    dto: UpdatePublicDto
  ): Promise<PublicEntity> {
    const existsPublic = await this.publicRepository.findById(id);
    let hasChange = false;

    if (existsPublic.publicType !== dto.publicType) {
      throw new ConflictException(
        `Public with id ${existsPublic.publicId} has another type`
      );
    }

    for (const [key, value] of Object.entries(dto)) {
      if (value !== undefined && existsPublic[key] !== value) {
        existsPublic[key] = value;
        hasChange = true;
      }
    }

    if (!hasChange) {
      return existsPublic;
    }

    return this.publicRepository.update(id, existsPublic);
  }

  public async remove(id: string): Promise<void> {
    try {
      await this.publicRepository.deleteById(id);
    } catch {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }

  public async getDrafts(userId: string): Promise<PublicEntity[]> {
    return this.publicRepository.findDrafts(userId);
  }

  public async createRepost(
    publicId: string,
    userId: string
  ): Promise<PublicEntity> {
    const originalPublic = await this.getPublic(publicId);
    const isRepost = await this.publicRepository.findRepost(publicId, userId);
    if (isRepost) {
      throw new ConflictException(`Repost is already exist`);
    }

    const repostPublic = PublicEntity.fromObject(originalPublic);
    repostPublic.publicId = undefined;
    repostPublic.originalPublicId = originalPublic.publicId;
    repostPublic.originalUserId = originalPublic.userId;
    repostPublic.isRepost = true;
    repostPublic.userId = userId;
    repostPublic.commentsCount = INIT_COUNT_VALUE;
    repostPublic.likesCount = INIT_COUNT_VALUE;

    await this.publicRepository.save(repostPublic);

    return repostPublic;
  }

  public async searchByTitle(query: SearchQuery): Promise<PublicEntity[]> {
    return this.publicRepository.findByTitle(query);
  }
}
