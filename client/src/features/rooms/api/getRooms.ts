import { useInfiniteQuery } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { Pagination } from '@/types/pagination';
import { Room } from '@/features/rooms';

const getRooms = async ({
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
