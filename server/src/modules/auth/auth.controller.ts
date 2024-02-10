import { AuthService } from '@auth/auth.service';
import { RegisterUserDto } from '@auth/dto/register-user.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@users/schemas/user.schema';
import MongooseClassSerializerInterceptor from 'interceptors/mongooseClassSerializer.interceptor';

@Controller('auth')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.authService.register(registerUserDto);
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAuthUser(@Request() req) {
    return req.user;
  }
}
