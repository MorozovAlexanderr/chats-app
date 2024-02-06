import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { UserResponse } from '@/features/auth';
import { axios } from '@/lib/axios';
import storage from '@/utils/storage';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  name: string;
};

export const register = (
  credentials: RegisterCredentialsDTO
): Promise<UserResponse> => axios.post('/auth/register', credentials);

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserResponse, unknown, RegisterCredentialsDTO, unknown>({
    mutationFn: ({ email, password, name }) =>
      register({ email, password, name }),
    onSuccess: ({ data }) => {
      storage.setToken(data.token);
      queryClient.setQueryData(['user'], data.user);
      navigate('/home');
    },
    onError: (error) => {
      console.error(error);
    },
  });
}