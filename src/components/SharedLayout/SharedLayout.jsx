import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import { LogIn } from 'redux/pages/login/login';
// import { Register } from 'redux/pages/register/register';

export const SharedLayout = () => {
  return (
    <>
      <Header></Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
