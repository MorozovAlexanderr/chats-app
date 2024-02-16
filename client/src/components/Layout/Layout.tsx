import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <Header />
      <main className="no-scrollbar relative mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-y-auto md:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
