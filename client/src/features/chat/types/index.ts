import { User } from '@/features/auth';

export type Room = {
  _id: string;
  title: string;
  members: User[];
};

export type Message = {
  _id: string;
  content: string;
  roomId: string;
  creator: User;
  createdAt: string;
};
