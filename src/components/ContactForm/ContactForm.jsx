import { fetchAddNewContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  SectionForm,
  Form,
  LabelForm,
  Input,
  TextForm,
  ButtonForm,
} from './ContactForm.styled';

import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return alert(`${data.name} is already in contacts`);
    }
    dispatch(fetchAddNewContact(data));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <SectionForm>
      <Form onSubmit={handleSubmit}>
        <LabelForm>
          <TextForm>Name</TextForm>
          <Input
            id={nanoid()}
            type="text"
            name="name"
            value={name}
            placeholder="Nick"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </LabelForm>
        <LabelForm>
          <TextForm>Number</TextForm>
          <Input
            id={nanoid()}
            type="tel"
            name="number"
            value={number}
            placeholder="+38(063)01-001-01"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </LabelForm>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    </SectionForm>
  );
};
