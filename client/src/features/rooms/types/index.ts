import { User } from '@/features/auth';

export type Room = {
  _id: string;
  title: string;
  members: User[];
};
