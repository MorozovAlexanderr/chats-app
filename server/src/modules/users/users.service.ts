import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@users/schemas/user.schema';
import { RegisterUserDto } from '@auth/dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: RegisterUserDto): Promise<UserDocument> {
    return this.userModel.create(createUserDto);
  }

  async getUser(query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.userModel.findOne(query).exec();
  }
}
