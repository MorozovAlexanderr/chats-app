import { CreateMessageDto } from '@messages/dto/create-message.dto';
import { MessagesService } from '@messages/messages.service';
import { UseGuards } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { WsJwtGuard } from 'modules/chat/guards/ws.guard';
import { AuthSocketClient } from 'modules/chat/interfaces/auth-socket-client.interface';

@WebSocketGateway({ cors: { origin: '*' } })
@UseGuards(WsJwtGuard)
export class ChatGateway {
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('join')
  handleJoin(client: AuthSocketClient, roomId: number) {
    client.join(roomId.toString());
  }

  @SubscribeMessage('leave')
  handleLeave(client: AuthSocketClient, roomId: string) {
    client.leave(roomId);
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
