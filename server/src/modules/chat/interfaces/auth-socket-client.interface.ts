import { User } from '@users/schemas/user.schema';
import { Socket } from 'socket.io';

export interface AuthSocketClient extends Socket {
  user: User;
}
