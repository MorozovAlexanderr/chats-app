import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Room } from '@rooms/schemas/room.schema';
import MongooseClassSerializerInterceptor from 'interceptors/mongooseClassSerializer.interceptor';
import { CreateRoomDto } from 'modules/rooms/dto/create-room.dto';
import { RoomsService } from 'modules/rooms/rooms.service';

@UseGuards(AuthGuard('jwt'))
@UseInterceptors(MongooseClassSerializerInterceptor(Room))
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  createRoom(@Body() body: CreateRoomDto, @Request() req) {
    return this.roomsService.createRoom(body, req.user);
  }

  @Get()
  getRooms() {
    return this.roomsService.getAll();
  }
}
