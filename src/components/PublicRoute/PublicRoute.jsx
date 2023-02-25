import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const tokenUser = useSelector(selectToken);
  const shouldRedirect = tokenUser && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
