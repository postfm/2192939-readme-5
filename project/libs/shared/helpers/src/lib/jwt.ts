import { TokenPayload } from './../../../app/types/src/lib/token-payload.interface';
import { User } from './../../../app/types/src/lib/user.interface';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user._id,
    email: user.email,
    name: user.name,
  };
}
