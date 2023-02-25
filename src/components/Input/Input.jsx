// import chakraTheme from '@chakra-ui/theme';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

export const Input = ({
  onChange,
  placeholder,
  name,
  required,
  value,
  type,
}) => {
  // const { Button, InputGroup, Input, InputRightElement } =
  //   chakraTheme.components;

  return (
    // <InputGroup size="md">
    //   <Input
    //     onChange={onChange}
    //     id={name}
    //     name={name}
    //     min="3"
    //     max="15"
    //     required={required}
    //     placeholder={placeholder}
    //     value={value}
    //     pr="4.5rem"
    //     type={show ? 'text' : 'password'}
    //   />
    //   <InputRightElement width="4.5rem">
    //     <Button h="1.75rem" size="sm" onClick={handleClick}>
    //       {show ? 'Hide' : 'Show'}
    //     </Button>
    //   </InputRightElement>
    // </InputGroup>

    // <WrapperForm>
    <div className="input-container">
      <div className="input-group">
        <InputStyled
          id={name}
          type={type}
          name={name}
          min="3"
          max="15"
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="pass-strength">
        <div className="strength-percent"></div>
      </div>
    </div>
    // </WrapperForm>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.node,
};
