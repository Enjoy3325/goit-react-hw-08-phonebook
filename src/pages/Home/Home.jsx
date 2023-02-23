import { LinkHeader } from 'components/Header/Header.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
export const Home = () => {
  const location = useLocation();
  const selectorToken = useSelector(selectToken);
  return (
    <div>
      <h1>Welcome on bort!</h1>
      <h2>Phonebook 2.0</h2>
      {selectorToken && (
        <LinkHeader to={'/contacts'} state={{ from: location }}>
          <b>Go back</b>
        </LinkHeader>
      )}
    </div>
  );
};
