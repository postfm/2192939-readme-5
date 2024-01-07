import { Injectable } from '@nestjs/common';
import { CreateCommonPublicDto } from './dto/create-dto/create-common-public.dto';
import { RepoPublicRepository } from '../repo-public/public.repository';
import { TypeEntityAdapter } from '../repo-public/entity/entity-adapter';
import { UpdateCommonPublicDto } from './dto/update-dto/update-common-public.dto';

@Injectable()
export class ActionPublicService {
  constructor(private readonly publicRepository: RepoPublicRepository) {}

  public async create(dto: CreateCommonPublicDto, typePublic: string) {
    const newPublic = await new TypeEntityAdapter[typePublic](dto);

    return this.publicRepository.save(newPublic);
  }

  public async getPublic(id: string) {
    return this.publicRepository.findById(id);
  }

  public async changePublic(
    id: string,
    typePublic: string,
    dto: UpdateCommonPublicDto
  ) {
    const newPublic = await new TypeEntityAdapter[typePublic](dto);

    return this.publicRepository.update(id, newPublic);
  }

  public async remove(id: string) {
    return this.publicRepository.deleteById(id);
  }
}
