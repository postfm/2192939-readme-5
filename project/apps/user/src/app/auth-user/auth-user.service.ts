import { Injectable } from '@nestjs/common';
import { PublicUserRepository } from '../public-user/public-user.repository';

@Injectable()
export class AuthUserService {
  constructor(private readonly publicUserRepository: PublicUserRepository) {}
}
