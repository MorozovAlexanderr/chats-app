import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterUserDto {
  @Length(3, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
