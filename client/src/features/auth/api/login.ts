import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { UserResponse } from '@/features/auth';
import storage from '@/utils/storage';

type LoginCredentialsDTO = {
  email: string;
  password: string;
};

const login = (credentials: LoginCredentialsDTO): Promise<UserResponse> =>
  axios.post('/auth/login', credentials);

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserResponse, unknown, LoginCredentialsDTO, unknown>({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: ({ data }) => {
      storage.setToken(data.token);
      queryClient.setQueryData(['user'], data.user);
      navigate('/rooms');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
