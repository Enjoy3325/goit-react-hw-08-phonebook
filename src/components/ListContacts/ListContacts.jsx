import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/contacts/contactSelectors';
import { fetchDeleteContacts } from 'redux/contacts/contactsOperations';
import { BoxList } from './ListContacts.styled';
import { nanoid } from 'nanoid';
import { CardContact } from '../CardContact/CardContact';
import React from 'react';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const handlDeleteContacts = contactId => {
    dispatch(fetchDeleteContacts(contactId));
  };

  return (
    <BoxList>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map(({ name, number, id }) => {
            return (
              <CardContact
                key={nanoid()}
                id={id}
                name={name}
                number={number}
                handlDeleteContacts={handlDeleteContacts}
              ></CardContact>
            );
          })}
      </ul>
    </BoxList>
  );
};
