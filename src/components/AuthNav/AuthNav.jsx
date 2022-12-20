import { NavLink } from 'react-router-dom';
import { WrapperAuth } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <WrapperAuth>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </WrapperAuth>
  );
};
