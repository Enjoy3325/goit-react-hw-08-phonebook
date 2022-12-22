import { useDispatch, useSelector } from 'react-redux';
import { LinkHeader } from './Header.styled';
import { logoutUser } from 'redux/auth/authOperations';
import { WrapperHeader } from './Header.styled';

export const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log('isAuth :>> ', isAuth);
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

        {isAuth ? (
          <LinkHeader onClick={hendleLogout} to="/">
            Log out
          </LinkHeader>
        ) : (
          <LinkHeader to="/login">Log in</LinkHeader>
        )}
        {!isAuth && <LinkHeader to="/register">Register</LinkHeader>}
      </nav>
    </WrapperHeader>
  );
};
