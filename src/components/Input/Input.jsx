// import { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  onChange,
  placeholder,
  name,
  required,
  value,
  type,
}) => {
  // const [precentBar, setPrecentBar] = useState('');
  // const [passInputChange, setPassInputChange] = useState('');
  // const [passInputClasses, setPassInputClasses] =
  //   useState('pass-input-passive');
  // const [toggleIcon, setToggleIcon] = useState('🙈');
  // const [toggleIconClasses, setToggleIconClasses] = useState(
  //   'toggle-icon-passive'
  // );
  // const [ripple, setRipple] = useState('');
  // const [passLabel, setPassLabel] = useState('Not enough');
  // const [type, setType] = useState('password');

  // const addClass = className => {
  //   setPrecentBar('');
  //   if (className) {
  //     setPrecentBar(className);
  //   }
  // };
  // const toggleType = () => {
  //   if (type === 'password') {
  //     setType('text');
  //     return;
  //   }
  //   setType('password');
  // };
  // const handlePassInput = e => {
  //   e.preventDefault();
  //   setPassInputChange(e.target.value);
  // };
  //   if (passInputChange.length === 0 && passInputChange.length <= 5) {
  //     setPassLabel('Not enough');
  //     addClass();
  //   } else if (passInputChange.length >= 6 && passInputChange.length < 9) {
  //     setPassLabel('Weak');
  //     addClass('weak');
  //   } else if (passInputChange.length > 9 && passInputChange.length <= 11) {
  //     setPassLabel('Not Bad');
  //     addClass('average');
  //   } else if (passInputChange.length > 11) {
  //     setPassLabel('Strong');
  //     addClass('strong');
  //   }
  // };

  // const togglePassInput = e => {
  //   if (type === 'password') {
  //     setType('text');
  //     setToggleIcon('🙉');
  //     setRipple('ripple-active');
  //     setPassInputClasses('pass-input-active');
  //     setToggleIconClasses('toggle-icon-active');
  //   } else {
  //     setType('password');
  //     setToggleIcon('🙈');
  //     setRipple('ripple-passive');
  //     setPassInputClasses('pass-input-passive');
  //     setToggleIconClasses('toggle-icon-passive');
  //   }
  // };
  return (
    <div className="App">
      <div className="input-container">
        <div className="input-group">
          <input
            id={name}
            type={type}
            name={name}
            min="6"
            max="15"
            required={required}
            // className={passInputClasses}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {/* <span onChange={{ handlePassInput }}></span> */}
          {/* <span className={`ripple ${ripple}`}></span> */}
        </div>
        <div className="pass-strength">
          <div className="strength-percent"></div>
        </div>
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

// ={type === 'password' ? '🙈' : '🙉'}
