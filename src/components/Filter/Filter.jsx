import { chengeFilter } from 'redux/slice/contactsSlice';
import { useDispatch } from 'react-redux';
import { InputFilter, TextFilter, LabelFilter } from './Filter.styled';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

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
