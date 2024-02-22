import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@users/schemas/user.schema';
import { plainToClass } from 'class-transformer';
import { CreateRoomDto } from 'modules/rooms/dto/create-room.dto';
import { Room } from 'modules/rooms/schemas/room.schema';
import { PaginateModel } from 'mongoose';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: PaginateModel<Room>,
  ) {}

  createRoom(roomData: CreateRoomDto, user: User) {
    const room = new this.roomModel({ ...roomData, members: [user] });
    return room.save();
  }

  async getAll(page, limit) {
    const roomsData = await this.roomModel.paginate(
      {},
      { page, limit, populate: 'members' },
    );

    return {
      ...roomsData,
      docs: roomsData.docs.map((room) => plainToClass(Room, room.toJSON())),
    };
  }

  async getRoom(id: string) {
    const room = await this.roomModel.findById(id).populate('members');
    if (!room) {
      throw new NotFoundException();
    }
    return room;
  }
}
