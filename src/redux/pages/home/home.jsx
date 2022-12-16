import { NavLink } from 'react-router-dom';
// import { Contacts } from '../contacts/contacts';
// import { LogIn } from '../login/login';
import { Suspense } from 'react';

import { Register } from '../register/register';
export const Home = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end="true">
          Home
        </NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
      <div>
        <h1>Welcome on bort!</h1>
        <h2>Phonebook</h2>
      </div>
    </div>
  );
};
