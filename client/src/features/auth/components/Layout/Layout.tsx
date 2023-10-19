import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="margin mx-auto my-16 w-96">{children}</div>;
};

export default Layout;
