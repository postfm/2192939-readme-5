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
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import {
  RequestWithTokenPayload,
  RequestWithUser,
} from '@project/shared/app/types';

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
    return fillDto(LoggedUserRdo, { ...user, ...userToken });
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found',
  })
  @Get(':id')
  public async show(@Param('id', MongoIdValidationPipe) id: string) {
    const existUser = await this.authUserService.getUser(id);

    return existUser.toPOJO();
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Current password is wrong',
  })
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'Password has changed',
  })
  @Put('change-password')
  public async newPassword(@Body() dto: ChangePasswordDto) {
    const existUser = await this.authUserService.changePassword(dto);
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

  @UseGuards(JwtAuthGuard)
  @Post('check')
  public async checkToken(@Req() { user: payload }: RequestWithTokenPayload) {
    return payload;
  }

  @UseGuards(JwtAuthGuard)
  @Put('subscribe/:userId')
  public async subscribeUser(
    @Param('userId') userId: string,
    @Req() { user: payload }: RequestWithTokenPayload
  ) {
    return this.authUserService.subscribeUser(userId, payload.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('unsubscribe/:userId')
  public async unsubscribeUser(
    @Param('userId') userId: string,
    @Req() { user: payload }: RequestWithTokenPayload
  ) {
    return this.authUserService.unsubscribeUser(userId, payload.sub);
  }
}
