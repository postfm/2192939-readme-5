import { Injectable } from '@nestjs/common';
import { PublicUserEntity } from './public-user.entity';
import { BaseMemoryRepository } from '@project/core';

@Injectable()
export class PublicUserRepository extends BaseMemoryRepository<PublicUserEntity> {
  public findByEmail(email: string): Promise<PublicUserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);
    return Promise.resolve(user);
  }
}
