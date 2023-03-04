import { LinkHeader } from 'components/Header/Header.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import { WrapperHomePage, TitleStyled, Subtitle } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const selectorToken = useSelector(selectToken);
  return (
    <WrapperHomePage>
      <TitleStyled>Welcome on bort!</TitleStyled>
      <Subtitle>Phonebook 2.0</Subtitle>
      {selectorToken && (
        <LinkHeader to={'/contacts'} state={{ from: location }}>
          <p>Go back</p>
        </LinkHeader>
      )}
    </WrapperHomePage>
  );
};

export { Home as default };
