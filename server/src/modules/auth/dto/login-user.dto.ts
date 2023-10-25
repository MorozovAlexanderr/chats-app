import { RegisterUserDto } from '@auth/dto/register-user.dto';
import { PickType } from '@nestjs/mapped-types';

export class SignInUserDto extends PickType(RegisterUserDto, [
  'email',
  'password',
] as const) {}
