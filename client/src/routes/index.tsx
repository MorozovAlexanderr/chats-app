import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { useAuth } from '@/hooks/useAuth';
import Spinner from '@/components/Elements/Spinner';
import RoomsList from '@/pages/RoomsList';
import ChatRoom from '@/pages/ChatRoom';

const privateRoutes = [
  { path: '/rooms', element: <RoomsList /> },
  { path: '/rooms/:roomId', element: <ChatRoom /> },
  { path: '*', element: <Navigate to="/rooms" /> },
];

const publicRoutes = [
  { path: 'login', element: <SignIn /> },
  { path: 'register', element: <SignUp /> },
  { path: '*', element: <Navigate to="/login" /> },
];

const AppRouter = () => {
  const { user, isLoading } = useAuth();

  const routes = useRoutes([
    { element: <Layout />, children: user ? privateRoutes : publicRoutes },
  ]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return routes;
};

export default AppRouter;
