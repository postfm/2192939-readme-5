import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  Inject,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_PASSWORD_WRONG,
  SIGN_IN_USER_ERROR,
} from './auth-user.constant';
import { PublicUserEntity } from '../public-user/public-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AddonRepositoryInterface } from '@project/shared/core';
import { PublicUserRepositoryToken } from '../public-user/public-user.token';
import { JwtService } from '@nestjs/jwt';
import { JwtToken, User } from '@project/shared/app/types';
import { jwtConfig } from '@project/shared/config/user';
import { ConfigType } from '@nestjs/config';
import { createJWTPayload } from '@project/shared/helpers';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';

const INITIAL_VALUE = 0;
const INITIAL_ARRAY = [];

@Injectable()
export class AuthUserService {
  private readonly logger = new Logger(AuthUserService.name);

  constructor(
    @Inject(PublicUserRepositoryToken)
    private readonly publicUserRepository: AddonRepositoryInterface<PublicUserEntity>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtOptions: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenService: RefreshTokenService
  ) {}

  /**
   * Проверяет, существует ли пользователь перед его регистрацией
   * В случае успеха возвращает сущность "Пользователь"
   */
  public async register(dto: CreateUserDto) {
    const { email, name, password } = dto;

    const publicUser = {
      email,
      name,
      avatar: '',
      passwordHash: '',
      createAt: new Date(),
      publicsCount: INITIAL_VALUE,
      subscribersCount: INITIAL_VALUE,
      subscribers: INITIAL_ARRAY,
      subscriptions: INITIAL_ARRAY,
    };

    const existUser = await this.publicUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new PublicUserEntity(publicUser).setPassword(
      password
    );

    return this.publicUserRepository.save(userEntity);
  }

  /**
   * Проверяет существование пользователя по логину и паролю
   * В случае успеха возвращает информацию о пользователе
   */
  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;

    const existUser = await this.publicUserRepository.findByEmail(email);

    if (!existUser || !(await existUser.comparePassword(password))) {
      throw new UnauthorizedException(SIGN_IN_USER_ERROR);
    }

    return existUser.toPOJO();
  }

  /**
   * Возвращает информацию о пользователе по ID
   */
  public async getUser(id: string) {
    const existUser = await this.publicUserRepository.findById(id);

    if (!existUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return existUser;
  }

  public async getUserByEmail(email: string) {
    const existUser = await this.publicUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return existUser;
  }

  /**
   * Возвращает сущность "User" при успешной смене пароля пользователя
   */
  public async changePassword(dto: ChangePasswordDto) {
    const { oldPassword, newPassword, id } = dto;
    const existUser = await this.publicUserRepository.findById(id);

    if (!(await existUser.comparePassword(oldPassword))) {
      throw new ConflictException(AUTH_USER_PASSWORD_WRONG);
    }

    const userEntity = await new PublicUserEntity(existUser).setPassword(
      newPassword
    );

    return this.publicUserRepository.update(id, userEntity);
  }

  public async updateAvatar(id: string, avatarId: string) {
    const blogUser = await this.getUser(id);
    const blogUserEntity = new PublicUserEntity({
      ...blogUser,
      avatar: avatarId,
    });
    return this.publicUserRepository.update(id, blogUserEntity);
  }

  public async createUserToken(user: User): Promise<JwtToken> {
    const accessTokenPayload = createJWTPayload(user);
    const refreshTokenPayload = {
      ...accessTokenPayload,
      tokenId: crypto.randomUUID(),
    };
    await this.refreshTokenService.createRefreshSession(refreshTokenPayload);

    try {
      const accessToken = await this.jwtService.signAsync(accessTokenPayload);
      const refreshToken = await this.jwtService.signAsync(
        refreshTokenPayload,
        {
          secret: this.jwtOptions.refreshTokenSecret,
          expiresIn: this.jwtOptions.refreshTokenExpiresIn,
        }
      );

      return { accessToken, refreshToken };
    } catch (error) {
      this.logger.error('[Token generation error]: ' + error.message);
      throw new HttpException(
        'Ошибка при создании токена',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  public async subscribeUser(userId: string, subscriberId: string) {
    const existUser = await this.publicUserRepository.findById(userId);
    const subscriberUser = await this.publicUserRepository.findById(
      subscriberId
    );

    if (!existUser) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    if (existUser.subscribers.includes(subscriberId)) {
      throw new ConflictException(`You are already subscribed to this author`);
    }

    existUser.subscribers.push(subscriberId);
    const userEntity = new PublicUserEntity(existUser);

    subscriberUser.subscriptions.push(userId);
    const subscriberEntity = new PublicUserEntity(subscriberUser);
    this.publicUserRepository.update(subscriberId, subscriberEntity);

    return this.publicUserRepository.update(userId, userEntity);
  }

  public async unsubscribeUser(userId: string, subscriberId: string) {
    const existUser = await this.publicUserRepository.findById(userId);
    const subscriberUser = await this.publicUserRepository.findById(
      subscriberId
    );

    if (!existUser) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    if (!existUser.subscribers.includes(subscriberId)) {
      throw new ConflictException(`You are not following this author`);
    }

    existUser.subscribers = [
      ...existUser.subscribers.filter((item) => item !== subscriberId),
    ];
    const userEntity = new PublicUserEntity(existUser);

    subscriberUser.subscribers = [
      ...subscriberUser.subscribers.filter((item) => item !== subscriberId),
    ];
    const subscriberEntity = new PublicUserEntity(subscriberUser);
    this.publicUserRepository.update(subscriberId, subscriberEntity);

    return this.publicUserRepository.update(userId, userEntity);
  }
}
