import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '@users/schemas/user.schema';
import { UsersService } from '@users/users.service';
import { validateHash } from '@utils/hashing';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this._usersService.getUser({ email });

    if (user && (await validateHash(password, user.password))) return user;

    return null;
  }

  async login(user: UserDocument) {
    const payload = { id: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
      }),
    };
  }
}
