import { Injectable, ConflictException } from '@nestjs/common';
import { PublicUserRepository } from '../public-user/public-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS } from './auth-user.constant';
import { PublicUserEntity } from '../public-user/public-user.entity';

@Injectable()
export class AuthUserService {
  constructor(private readonly publicUserRepository: PublicUserRepository) {}

  public async register(dto: CreateUserDto) {
    const { email, name, password } = dto;

    const publicUser = { email, name, avatar: '', passwordHash: '' };

    const existUser = await this.publicUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new PublicUserEntity(publicUser).setPassword(
      password
    );

    return this.publicUserRepository.save(userEntity);
  }
}
