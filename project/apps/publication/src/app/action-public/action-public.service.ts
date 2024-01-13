import { Injectable, NotFoundException } from '@nestjs/common';
import { RepoPublicRepository } from '../repo-public/repo-public.repository';
import { CreatePublicDto } from './dto/create-dto/create-public.dto';
import { PublicEntity } from '../repo-public/repo-public.entity';
import { PublicQuery } from '../repo-public/query/public.query';
import { PaginationResult } from '@project/shared/app/types';
import { UpdatePublicDto } from './dto/update-dto/update-public.dto';

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
    console.log(id);

    return this.publicRepository.findById(id);
  }

  public async changePublic(
    id: string,
    dto: UpdatePublicDto
  ): Promise<PublicEntity> {
    const existsPublic = await this.publicRepository.findById(id);
    let hasChange = false;

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
}
