import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axios } from '@/lib/axios';
import { UserAuthResponse } from '@/features/auth';
import storage from '@/utils/storage';

type LoginCredentialsDTO = {
  email: string;
  password: string;
};

const login = (credentials: LoginCredentialsDTO): Promise<UserAuthResponse> =>
  axios.post('/auth/login', credentials);

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<UserAuthResponse, unknown, LoginCredentialsDTO, unknown>({
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
