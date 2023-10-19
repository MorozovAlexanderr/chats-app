import { PropsWithChildren } from 'react';
import MessagingImg from '@/assets/images/Messaging.svg';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="margin my-16 flex w-full justify-between">
      <div className="w-96">{children}</div>
      <img src={MessagingImg} className="md:w-[300px] lg:w-[500px]" />
    </div>
  );
};

export default Layout;
