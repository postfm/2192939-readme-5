import { FileInterceptor } from '@nestjs/platform-express';
import { ChangePasswordDto } from './dto/change-password.dto';
import { MongoIdValidationPipe } from '@project/shared/core';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ApplicationServiceURL } from './app.config';
import { Request } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { AxiosExceptionFilter } from './filters/axios-exception.filter';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CheckAuthGuard } from './guards/check.auth.guard';
import { UserIdInterceptor } from './interceptors/user-id-interceptor';
import { Express } from 'express';
import 'multer';
import FormData from 'form-data';

@ApiTags('User')
@Controller('User')
@UseFilters(AxiosExceptionFilter)
export class UserController {
  constructor(private readonly httpService: HttpService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User registered successfully',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User with this email already exists',
  })
  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.User}/register`,
      createUserDto
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login successful',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Email or password is invalid',
  })
  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.User}/login`,
      loginUserDto
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Password successfully changed',
  })
  // @UseGuards(CheckAuthGuard)
  @Post('id')
  public async newPassword(
    @Req() req: Request & { user: any },
    @Body() dto: ChangePasswordDto
  ) {
    const id = req.user.sub;
    console.log(id);

    const { data } = await this.httpService.axiosRef.put(
      `${ApplicationServiceURL.User}/change-password`,
      { id, ...dto },
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a new pair access/refresh tokens',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User is not authorized',
  })
  @Post('refresh')
  public async refreshToken(@Req() req: Request) {
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.User}/refresh`,
      null,
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );

    return data;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User data found',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User is not found',
  })
  @Get(':id')
  public async show(@Param('id') id: MongoIdValidationPipe) {
    const { data: userData } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.User}/${id}`
    );
    const { data: publicsData } = await this.httpService.axiosRef.get(
      `${ApplicationServiceURL.Public}?user=${id}`
    );
    const publicsCount = publicsData.entities.length;

    return { ...userData, publicsCount };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Avatar added successfully',
  })
  @UseGuards(CheckAuthGuard)
  @Post(`${'upload'}-${'avatar'}`)
  @UseInterceptors(FileInterceptor('avatar'))
  public async uploadAvatar(
    @Req() req: Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    const formData = new FormData();
    formData.append('avatar', Buffer.from(file.buffer), file.originalname);
    const { data: avatarData } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.Uploader}/${'upload'}/${'avatar'}`,
      formData,
      {
        headers: {
          'Content-Type': req.headers['content-type'],
          ...formData.getHeaders(),
        },
      }
    );
    const { data } = await this.httpService.axiosRef.post(
      `${ApplicationServiceURL.User}/${'upload'}-${'avatar'}`,
      { avatarId: avatarData.id },
      {
        headers: {
          Authorization: req.headers['authorization'],
        },
      }
    );
    return data;
  }
}
