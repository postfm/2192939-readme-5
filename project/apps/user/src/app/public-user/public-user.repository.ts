import { Injectable } from '@nestjs/common';
import { PublicUserEntity } from './public-user.entity';
import { BaseMemoryRepository } from '@project/shared/core';

@Injectable()
export class PublicUserRepository extends BaseMemoryRepository<PublicUserEntity> {
  public findByEmail(email: string): Promise<PublicUserEntity | undefined> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);
    return Promise.resolve(user);
  }
}
