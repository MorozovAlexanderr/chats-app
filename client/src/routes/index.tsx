import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { useAuth } from '@/hooks/useAuth';
import Spinner from '@/components/Elements/Spinner';

const privateRoutes = [
  { path: '/home', element: <Home /> },
  { path: '*', element: <Navigate to="/home" /> },
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
