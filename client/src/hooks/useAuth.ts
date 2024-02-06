import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/features/auth';

export const useAuth = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { user, isLoading };
};
