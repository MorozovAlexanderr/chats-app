import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import storage from '@/utils/storage';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async () => {
      storage.clearToken();
      window.location.assign(window.location.origin as unknown as string);
    },
    onSuccess: () => {
      queryClient.clear();
      navigate('/login');
    },
  });

  return mutate;
};
