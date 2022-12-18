import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end="true">
          Home
        </NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};
