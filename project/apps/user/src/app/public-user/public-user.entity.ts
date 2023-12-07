import { Entity } from '@project/shared/core';
import { AuthUser } from '@project/shared/app/types';

export class PublicUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public name: string;
  public avatar: string;
  public passwordHash: string;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.name = data.name;
    this.avatar = data.avatar;
  }
}
