import { ReactChild } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: {children : ReactChild}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
