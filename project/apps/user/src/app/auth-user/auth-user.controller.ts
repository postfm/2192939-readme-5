import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillDto } from '@project/shared/helpers';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

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
    return fillDto(LoggedUserRdo, verifiedUser);
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found',
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authUserService.getUser(id);
    return fillDto(UserRdo, existUser.toPOJO());
  }
}
