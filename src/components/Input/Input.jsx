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
  return (
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
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.node,
};
