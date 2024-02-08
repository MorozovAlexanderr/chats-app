import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="relative mx-auto flex h-full max-w-7xl md:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
