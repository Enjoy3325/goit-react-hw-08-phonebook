import { NavLink } from 'react-router-dom';
// import { Contacts } from '../contacts/contacts';
// import { LogIn } from '../login/login';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

export const Home = () => {
  return (
    <div>
      <nav>
        <Suspense>
          <NavLink to="/" end="true">
            Home
          </NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </Suspense>
        <Outlet />
      </nav>
      <div>
        <h1>Welcome on bort!</h1>
        <h2>Phonebook</h2>
      </div>
    </div>
  );
};
