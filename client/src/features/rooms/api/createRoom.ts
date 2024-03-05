import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { axios } from '@/lib/axios';
import { Room } from '@/features/rooms';

type CreateRoomDTO = {
  title: string;
};

const createRoom = async (data: CreateRoomDTO): Promise<Room> => {
  const response = await axios.post('/rooms', data);
  return response.data;
};

export const useCreateRoom = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Room, unknown, CreateRoomDTO, unknown>({
    mutationFn: ({ title }) => createRoom({ title }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
        refetchType: 'inactive',
      });
      navigate(`/rooms/${data._id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
