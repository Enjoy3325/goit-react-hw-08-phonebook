import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/auth/authOperations';

export const Header = () => {
  const dispatch = useDispatch();
  const hendleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav>
        <NavLink to="/" end="true">
          Home
        </NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink onClick={hendleLogout} to="/login">
          Log out
        </NavLink>

        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};
