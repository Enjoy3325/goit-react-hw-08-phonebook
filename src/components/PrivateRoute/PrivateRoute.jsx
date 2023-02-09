import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const tokenUser = useSelector(selectToken);
  return tokenUser ? children : <Navigate to="/login" />;
};
