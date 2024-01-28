import { PublicUserEntity } from '../../../../../../apps/user/src/app/public-user/public-user.entity';

export interface RequestWithUser {
  user?: PublicUserEntity;
}
