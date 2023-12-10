import { LinkPublicInterface } from "@project/shared/app/types";
import { Entity } from "@project/shared/core";

export class CreateLinkPublicDto implements LinkPublicInterface {
  public id?: string;
  public link: string;
  public description?: string;
}
