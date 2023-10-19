import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="mx-auto max-w-7xl md:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
