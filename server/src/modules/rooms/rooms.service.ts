import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';
import { CreateRoomDto } from 'modules/rooms/dto/create-room.dto';
import { Room } from 'modules/rooms/schemas/room.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
  ) {}

  createRoom(roomData: CreateRoomDto, user: User) {
    return this.roomModel.create({ ...roomData, members: [user] });
  }

  getAll() {
    return this.roomModel.find().populate('members');
  }
}
