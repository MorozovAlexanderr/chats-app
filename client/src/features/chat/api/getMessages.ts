import { useQuery } from '@tanstack/react-query';
import { Message } from '../types';
import { axios } from '@/lib/axios';

const getMessages = async (roomId: string): Promise<Message[]> => {
  const response = await axios.get(`messages/${roomId}`);
  return response.data;
};

export const useMessages = (roomId: string) => {
  return useQuery({
    queryKey: ['messages', roomId],
    queryFn: () => getMessages(roomId),
  });
};
