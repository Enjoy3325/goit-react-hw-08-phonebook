import { getFilter, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContacts } from 'redux/operations';
import { BoxList } from './ListContacts.styled';
import { nanoid } from 'nanoid';
import { CardContact } from '../CardContact/CardContact';
import React from 'react';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  console.log('filterValue :>> ', filterValue);

  const handlDeleteContacts = id => {
    dispatch(fetchDeleteContacts(id));
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
