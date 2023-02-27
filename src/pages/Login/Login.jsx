import { loginUser } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/Input/Input';
import { WrapperForm } from 'components/Input/Input.styled';
import { WrapperButton } from 'components/RegisterForm/RegisterForm.styled';
import { LinkHeader } from 'components/Header/Header.styled';
import ButtonAuth from './Login.styled';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <WrapperForm>
      <form onSubmit={handleLoginSubmit}>
        <label>
          <b>Email</b>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
          />
        </label>
        <label htmlFor="pin">
          <b>Password</b>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            required
          />
        </label>
        <WrapperButton>
          <ButtonAuth type="submite">Log In</ButtonAuth>
          <ButtonAuth>Sign up</ButtonAuth>
        </WrapperButton>
      </form>
    </WrapperForm>
  );
};
