import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Room } from '@rooms/schemas/room.schema';
import { PaginationRequestDto } from 'dto/pagination-request.dto';
import MongooseClassSerializerInterceptor from 'interceptors/mongooseClassSerializer.interceptor';
import { CreateRoomDto } from '@rooms/dto/create-room.dto';
import { RoomsService } from '@rooms/rooms.service';
import { PaginationTransformPipe } from 'pipes/pagination-transform.pipes';

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
  getRooms(
    @Query(new PaginationTransformPipe())
    { page = 1, limit = 3 }: PaginationRequestDto,
  ) {
    return this.roomsService.getAll(page, limit);
  }
}
