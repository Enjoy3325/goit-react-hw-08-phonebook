import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Home } from 'redux/pages/home/home';

export const SharedLayout = () => {
  return (
    <>
      <Home></Home>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
