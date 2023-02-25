import { useDispatch, useSelector } from 'react-redux';
import { LinkHeader, Nav } from './Header.styled';
import { logoutUser, loginUser } from 'redux/auth/authOperations';
import { WrapperHeader } from './Header.styled';
import { selectIsAuth } from 'redux/auth/authSelectors';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  console.log('isAuth :>> ', isAuth);
  const dispatch = useDispatch();

  const hendeleLogin = () => {
    dispatch(loginUser());
  };
  const hendleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <WrapperHeader>
      <Nav>
        <LinkHeader to="/" end="true">
          Home
        </LinkHeader>

        {isAuth ? (
          <LinkHeader onClick={hendleLogout} to="/">
            Log out
          </LinkHeader>
        ) : (
          <LinkHeader onClick={hendeleLogin} to="/login">
            Log in
          </LinkHeader>
        )}
        {!isAuth && <LinkHeader to="/register">Register</LinkHeader>}
      </Nav>
    </WrapperHeader>
  );
};
