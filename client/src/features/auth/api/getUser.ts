import { AuthUser } from '@/features/auth';
import { axios } from '@/lib/axios';

export const getUser = async (): Promise<AuthUser> => {
  const response = await axios.get('/auth');
  return response.data;
};
