import { Injectable } from '@nestjs/common';
import { UserDocument } from '@users/schemas/user.schema';
import { UsersService } from '@users/users.service';
import { validateHash } from '@utils/hashing';

@Injectable()
export class AuthService {
  constructor(private _usersService: UsersService) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const user = await this._usersService.getUser({ email });

    if (user && (await validateHash(password, user.password))) return user;

    return null;
  }
}
