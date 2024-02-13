import { useInfiniteQuery } from '@tanstack/react-query';
import { Room } from '../types';
import { axios } from '@/lib/axios';
import { Pagination } from '@/types/pagination';

export const getRooms = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<Pagination<Room>> => {
  const response = await axios.get('/rooms', { params: { page: pageParam } });
  return response.data;
};

export const useRooms = () => {
  return useInfiniteQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
