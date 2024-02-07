import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/features/auth';
import storage from '@/utils/storage';

const loadUser = async () => {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
};

export const useAuth = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: loadUser,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { user, isLoading };
};
