import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import React from 'react';
import { ButtonCard, Text, ItemContactStyled } from './CardContact.styled';

export const CardContact = ({ id, name, number, handlDeleteContacts }) => {
  return (
    <ItemContactStyled>
      <Text>
        {name}: {number}
      </Text>

      <ButtonCard
        type="button"
        onClick={() => {
          handlDeleteContacts(id);
        }}
      >
        <FiTrash2 />
      </ButtonCard>
    </ItemContactStyled>
  );
};

CardContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handlDeleteContacts: PropTypes.func.isRequired,
};
