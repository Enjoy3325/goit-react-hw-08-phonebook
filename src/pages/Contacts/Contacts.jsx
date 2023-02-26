import { ListContacts } from '../../components/ListContacts/ListContacts';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Wrapper } from '../../components/App/App.styled';
import { ProgressBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { useEffect } from 'react';

import {
  TitleContactsStyled,
  BoxFilterContacts,
  SubtitleContactsStyled,
} from './Contacts.styled';
export const Contacts = () => {
  const { error, status } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <div>
        <TitleContactsStyled>Phonebook </TitleContactsStyled>
        {status === 'loading' ? <ProgressBar /> : ''}
        {error ? <h2>An error occured: {error}</h2> : <ContactForm />}
      </div>

      <section>
        <BoxFilterContacts>
          <Filter />
          <ButtonBack />
          <SubtitleContactsStyled>Contacts</SubtitleContactsStyled>
          <ListContacts />
        </BoxFilterContacts>
      </section>
    </Wrapper>
  );
};
