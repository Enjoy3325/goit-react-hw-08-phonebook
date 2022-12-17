import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { Wrapper } from './App.styled';
import { ProgressBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { useEffect } from 'react';
export const Contacts = () => {
  const { error, status } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <div>
        <h1>Phonebook </h1>
        {status === 'loading' ? <ProgressBar /> : ''}
        {error ? <h2>An error occured: {error}</h2> : <ContactForm />}
      </div>

      <section>
        <div>
          <Filter />
          <h2>Contacts</h2>
          <ListContacts />
        </div>
        <ButtonBack />
      </section>
    </Wrapper>
  );
};
