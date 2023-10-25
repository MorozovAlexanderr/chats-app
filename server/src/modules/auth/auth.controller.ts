import { RegisterUserDto } from '@auth/dto/register-user.dto';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '@users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly _usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    await this._usersService.create(registerUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return req.user;
  }
}
