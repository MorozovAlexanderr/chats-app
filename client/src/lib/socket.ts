import { io, Socket } from 'socket.io-client';
import storage from '@/utils/storage';
import { CreateMessageDto, Message } from '@/features/chat';

type ClientToServerEvents = {
  join: (roomId: string) => void;
  leave: (roomId: string) => void;
  message: (data: CreateMessageDto) => void;
};

type ServerToClientEvents = {
  message: (message: Message) => void;
};

class SocketService {
  private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(import.meta.env.VITE_WEBSOCKET_URL, {
      autoConnect: false,
    });

  connect() {
    this.socket.auth = { token: `Bearer ${storage.getToken()}` };
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(data: CreateMessageDto) {
    this.socket.emit('message', data);
  }

  subscribeToMessages(cb: ServerToClientEvents['message']) {
    this.socket.on('message', cb);
  }

  joinRoom(roomId: string) {
    this.socket.emit('join', roomId);
  }

  leaveRoom(roomId: string) {
    this.socket.emit('leave', roomId);
  }
}

export const socketService = new SocketService();
