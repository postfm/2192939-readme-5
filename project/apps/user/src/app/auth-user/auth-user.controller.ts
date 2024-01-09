import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change-password.dto';
import { fillDto } from '@project/shared/helpers';
import { MongoIdValidationPipe } from '@project/shared/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth-user')
@Controller('user')
export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authUserService.register(dto);

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
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authUserService.verifyUser(dto);
    const userToken = await this.authUserService.createUserToken(verifiedUser);
    return fillDto(LoggedUserRdo, { ...verifiedUser, ...userToken });
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
}
