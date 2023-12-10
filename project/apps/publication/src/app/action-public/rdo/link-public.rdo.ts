import { Expose } from "class-transformer";

export class LinkPublicRdo {
  @Expose()
  public id: string;

  @Expose()
  public link: string;

  @Expose()
  public description?: string;
}
