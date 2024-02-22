import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
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

  @Post()
  createMessage(
    @Body() { content, roomId }: { content: string; roomId: string },
    @Req() req,
  ) {
    return this.messagesService.createMessage(content, roomId, req.user);
  }

  @Get(':room')
  getAllMessages(@Param('room') roomId: string) {
    return this.messagesService.getMessages(roomId);
  }
}
