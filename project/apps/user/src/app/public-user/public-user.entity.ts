import { AuthUser } from '@project/shared/app/types';
import { SALT_ROUNDS } from './public-user.constant';
import { hash, genSalt, compare } from 'bcrypt';
import { Entity } from '@project/shared/core';
import { PublicUserModel } from './public-user.model';

export class PublicUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public name: string;
  public avatar?: string;
  public passwordHash: string;
  public createAt: Date;
  public publicsCount?: number;
  public subscribersCount?: number;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
      createAt: this.createAt,
      publicsCount: this.publicsCount,
      subscriberCount: this.subscribersCount,
    };
  }

  public populate(data: AuthUser): void {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.avatar = data.avatar;
    this.passwordHash = data.passwordHash;
    this.createAt = data.createAt ?? new Date();
    this.publicsCount = data.publicsCount;
    this.subscribersCount = data.subscribersCount;
  }

  public async setPassword(password: string): Promise<PublicUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: PublicUserModel): PublicUserEntity {
    return new PublicUserEntity({ ...data, id: data._id });
  }
}
