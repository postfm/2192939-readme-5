import { Entity, EntityIdType } from './entity.interface';
import { Repository } from './repository.interface';

export interface AddonRepositoryInterface<T extends Entity<EntityIdType>>
  extends Repository<T> {
  findByEmail(email: string): Promise<T>;
}
