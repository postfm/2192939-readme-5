import { Entity } from '@project/shared/core';
import { File } from '@project/shared/app/types';
export class FileEntity implements File, Entity<string> {
  public id?: string;
  public originalName: string;
  public size: number;
  public mimetype: string;
  public hashName: string;
  public path: string;
  public createAt?: Date;
  public updateAt?: Date;
  public subDirectory: string;

  public toPOJO() {
    return {
      id: this.id,
      originalName: this.originalName,
      size: this.size,
      mimetype: this.mimetype,
      hashName: this.hashName,
      path: this.path,
      createAt: this.createAt,
      updateAt: this.updateAt,
      subDirectory: this.subDirectory,
    };
  }

  public populate(data: File): FileEntity {
    this.id = data.id ?? undefined;
    this.originalName = data.originalName;
    this.size = data.size;
    this.mimetype = data.mimetype;
    this.hashName = data.hashName;
    this.path = data.path;
    this.createAt = data.createAt ?? undefined;
    this.updateAt = data.updateAt ?? undefined;
    this.subDirectory = data.subDirectory;

    return this;
  }

  static fromObject(data: File): FileEntity {
    return new FileEntity().populate(data);
  }
}
