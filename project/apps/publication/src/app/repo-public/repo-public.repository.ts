import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { CommonPublicEntity } from './entity/common-public.entity';

@Injectable()
export class RepoPublicRepository extends BaseMemoryRepository<CommonPublicEntity> {}
