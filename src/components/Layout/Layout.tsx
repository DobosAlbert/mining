import React from 'react';
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
import { useLocation } from 'react-router-dom';
import { routes, routeNames } from 'routes';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  return (
    <div className='bg-dark d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};
