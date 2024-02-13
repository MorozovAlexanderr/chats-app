import { Injectable } from '@nestjs/common';
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
    return this.roomModel.create({ ...roomData, members: [user] });
  }

  async getAll(page, limit) {
    const roomsData = await this.roomModel.paginate(
      {},
      { page, limit, sort: { _id: 1 }, populate: 'members' },
    );

    return {
      ...roomsData,
      docs: roomsData.docs.map((room) => plainToClass(Room, room.toJSON())),
    };
  }
}
