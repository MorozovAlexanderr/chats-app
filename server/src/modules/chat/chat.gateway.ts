import { CreateMessageDto } from '@messages/dto/create-message.dto';
import { MessagesService } from '@messages/messages.service';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import MongooseClassSerializerInterceptor from 'interceptors/mongooseClassSerializer.interceptor';
import { WsJwtGuard } from 'modules/chat/guards/ws.guard';
import { AuthSocketClient } from 'modules/chat/interfaces/auth-socket-client.interface';

@WebSocketGateway()
@UseGuards(WsJwtGuard)
export class ChatGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('join')
  handleJoin(client: AuthSocketClient, roomId: number) {
    client.join(roomId.toString());
    return roomId;
  }

  @SubscribeMessage('message')
  async handleMessage(
    client: AuthSocketClient,
    createMessageDto: CreateMessageDto,
  ) {
    const message = await this.messagesService.createMessage(
      createMessageDto,
      client.user,
    );

    client.emit('message', message);
    client.to(message.roomId).emit('message', message);
  }
}
