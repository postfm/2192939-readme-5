import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PublicUserRepository } from '../public-user/public-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
} from './auth-user.constant';
import { PublicUserEntity } from '../public-user/public-user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthUserService {
  constructor(private readonly publicUserRepository: PublicUserRepository) {}

  /**
   * Пункт ТЗ:
   * 1.1. Регистрация новых пользователей
   */
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

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.publicUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    const publicUserEntity = new PublicUserEntity(existUser);
    if (!(await publicUserEntity.comparePassword)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return publicUserEntity.toPOJO();
  }

  public async getUser(id: string) {
    return this.publicUserRepository.findById(id);
  }
}
