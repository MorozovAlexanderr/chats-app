import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppProvider = ({ children }: PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;
