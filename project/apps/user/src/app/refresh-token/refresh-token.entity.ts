import { Token } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class RefreshTokenEntity implements Token, Entity<string, Token> {
  public createdAt: Date;
  public expiresIn: Date;
  public id: string;
  public tokenId: string;
  public userId: string;

  constructor(token: Token) {
    this.populate(token);
  }

  public toPOJO() {
    return {
      id: this.id,
      userId: this.userId,
      tokenId: this.tokenId,
      createdAt: this.createdAt,
      expiresIn: this.expiresIn,
    };
  }

  public populate(data: Token): void {
    this.userId = data.userId;
    this.id = data.id;
    this.tokenId = data.tokenId;
    this.createdAt = data.createdAt;
    this.expiresIn = data.expiresIn;
  }

  static fromObject(data: Token): RefreshTokenEntity {
    return new RefreshTokenEntity(data);
  }
}
