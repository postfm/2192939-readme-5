import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change-password.dto';
import { fillDto } from '@project/shared/helpers';
import { MongoIdValidationPipe } from '@project/shared/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { NotifyService } from '../notify/notify.service';
import { PublicUserEntity } from '../public-user/public-user.entity';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';

interface RequestWithUser {
  user?: PublicUserEntity;
}

@ApiTags('auth-user')
@Controller('user')
export class AuthUserController {
  constructor(
    private readonly authUserService: AuthUserService,
    private readonly notifyService: NotifyService
  ) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authUserService.register(dto);
    const { email, name } = newUser;
    await this.notifyService.registerSubscriber({ email, name });

    return fillDto(UserRdo, newUser.toPOJO());
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() { user }: RequestWithUser) {
    const userToken = await this.authUserService.createUserToken(user);
    return fillDto(LoggedUserRdo, { ...user.toPOJO, ...userToken });
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existUser = await this.authUserService.getUser(id);
    return fillDto(UserRdo, existUser.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Current password is wrong',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'Password has changed',
  })
  @Put(':id')
  public async newPassword(
    @Param('id') id: string,
    @Body() dto: ChangePasswordDto
  ) {
    const existUser = await this.authUserService.changePassword(id, dto);
    return fillDto(UserRdo, existUser.toPOJO());
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a new access/refresh tokens',
  })
  public async refreshToken(@Req() { user }: RequestWithUser) {
    return this.authUserService.createUserToken(user);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Avatar is update',
  })
  @UseGuards(JwtAuthGuard)
  @Post('avatar/:userId')
  public async updateAvatar(
    @Param('userId') userId: string,
    @Body('avatarId') avatarId: string
  ) {
    return this.authUserService.updateAvatar(userId, avatarId);
  }
}
