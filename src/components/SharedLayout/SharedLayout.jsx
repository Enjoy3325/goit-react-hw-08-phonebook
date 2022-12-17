import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Home } from 'redux/pages/Home/Home';
// import { LogIn } from 'redux/pages/login/login';
// import { Register } from 'redux/pages/register/register';

export const SharedLayout = () => {
  return (
    <>
      <Suspense>
        <Home></Home>
        {/* <LogIn></LogIn>
        <Register></Register> */}
      </Suspense>
      <Outlet />
    </>
  );
};
