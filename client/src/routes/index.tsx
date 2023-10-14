import { useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

const publicRoutes = [{ path: '/', element: <Home /> }];

const AppRouter = () => {
  const routes = useRoutes([{ element: <Layout />, children: publicRoutes }]);

  return routes;
};

export default AppRouter;
