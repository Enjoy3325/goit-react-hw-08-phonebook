import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { chengeFilter } from 'redux/contacts/contactsSlice';
import { InputFilter, TextFilter, LabelFilter } from './Filter.styled';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    setFilter(e.target.value);
    dispatch(chengeFilter(e.target.value));
  };

  return (
    <LabelFilter id={nanoid()}>
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter type="text" value={filter} onChange={onChangeFilter} />
    </LabelFilter>
  );
};
