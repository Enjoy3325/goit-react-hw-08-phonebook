import { LinkHeader } from 'components/Header/Header.styled';
import { useLocation } from 'react-router-dom';
export const ButtonBack = () => {
  const location = useLocation();

  return (
    <>
      <LinkHeader to={'/'} state={{ from: location }}>
        <p>Go back</p>
      </LinkHeader>
    </>
  );
};
