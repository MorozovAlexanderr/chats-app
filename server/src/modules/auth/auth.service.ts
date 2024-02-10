import { RegisterUserDto } from '@auth/dto/register-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '@users/schemas/user.schema';
import { UsersService } from '@users/users.service';
import { validateHash } from '@utils/hashing';
import { plainToClass } from 'class-transformer';
import MongoError from 'constants/mongoErrors';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerData: RegisterUserDto) {
    try {
      return await this.usersService.create(registerData);
    } catch (error) {
      if (error?.code === MongoError.DuplicateKey) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(user: UserDocument) {
    const payload = { id: user.id };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
      }),
      user: plainToClass(User, user.toJSON()),
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this.usersService.getUser({ email });

    if (user && (await validateHash(password, user.password))) return user;

    return null;
  }
}
