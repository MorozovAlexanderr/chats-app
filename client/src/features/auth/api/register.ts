import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { UserAuthResponse } from '@/features/auth';
import { axios } from '@/lib/axios';
import storage from '@/utils/storage';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  name: string;
};

const register = (
  credentials: RegisterCredentialsDTO
): Promise<UserAuthResponse> => axios.post('/auth/register', credentials);

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserAuthResponse, unknown, RegisterCredentialsDTO, unknown>({
    mutationFn: ({ email, password, name }) =>
      register({ email, password, name }),
    onSuccess: ({ data }) => {
      storage.setToken(data.token);
      queryClient.setQueryData(['user'], data.user);
      navigate('/rooms');
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
