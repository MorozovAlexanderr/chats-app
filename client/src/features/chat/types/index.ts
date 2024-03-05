import { User } from '@/features/auth';

export type Message = {
  _id: string;
  content: string;
  roomId: string;
  creator: User;
  createdAt: string;
};

export type CreateMessageDto = {
  content: string;
  roomId: string;
};
