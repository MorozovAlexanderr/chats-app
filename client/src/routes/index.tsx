import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: 'login', element: <SignIn /> },
  { path: 'register', element: <SignUp /> },
  { path: '*', element: <Navigate to="login" /> },
];

const AppRouter = () => {
  const routes = useRoutes([{ element: <Layout />, children: publicRoutes }]);

  return routes;
};

export default AppRouter;
