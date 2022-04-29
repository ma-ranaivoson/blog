import { ReactChild } from 'react';
import Header from './Header';

export default function Layout({ children }: {children : ReactChild}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
