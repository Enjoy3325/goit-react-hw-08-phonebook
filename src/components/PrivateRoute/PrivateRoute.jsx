import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? children : <Navigate to="/login" />;
};
