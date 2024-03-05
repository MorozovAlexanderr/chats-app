import { useQuery } from '@tanstack/react-query';
import { Room } from '../../chat/types';
import { axios } from '@/lib/axios';

const getRoom = async (roomId: string): Promise<Room> => {
  const response = await axios.get(`rooms/${roomId}`);
  return response.data;
};

export const useRoom = (roomId: string) => {
  return useQuery({
    queryKey: ['rooms', roomId],
    queryFn: () => getRoom(roomId),
  });
};
