import { useDispatch } from 'react-redux';
import { LinkHeader } from './Header.styled';
import { logoutUser } from 'redux/auth/authOperations';
import { WrapperHeader } from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const hendleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <WrapperHeader>
      <nav>
        <LinkHeader to="/" end="true">
          Home
        </LinkHeader>
        <LinkHeader to="/login">Log in</LinkHeader>
        <LinkHeader onClick={hendleLogout} to="/login">
          Log out
        </LinkHeader>

        <LinkHeader to="/register">Register</LinkHeader>
      </nav>
    </WrapperHeader>
  );
};
