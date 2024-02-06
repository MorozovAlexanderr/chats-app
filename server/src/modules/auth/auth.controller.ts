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
  constructor(private readonly _authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this._authService.register(registerUserDto);
    return this._authService.login(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  login(@Request() req) {
    return this._authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getAuthUser(@Request() req) {
    return req.user;
  }
}
