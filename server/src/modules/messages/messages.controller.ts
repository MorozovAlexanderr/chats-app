import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import MongooseClassSerializerInterceptor from 'interceptors/mongooseClassSerializer.interceptor';
import { MessagesService } from 'modules/messages/messages.service';
import { Message } from 'modules/messages/schemas/message.schems';

@UseGuards(AuthGuard('jwt'))
@UseInterceptors(MongooseClassSerializerInterceptor(Message))
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':room')
  getAllMessages(@Param('room') roomId: string) {
    return this.messagesService.getMessages(roomId);
  }
}
