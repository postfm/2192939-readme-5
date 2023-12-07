import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { PublicUserEntity } from './public-user.entity';

@Injectable()
export class PublicUserRepository extends BaseMemoryRepository<PublicUserEntity> {}
