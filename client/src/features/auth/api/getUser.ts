import { User } from '../types';
import { axios } from '@/lib/axios';

export const getUser = async (): Promise<User> => {
  const response = await axios.get('/auth');
  return response.data;
};
