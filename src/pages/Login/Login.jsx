import { loginUser } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/Input/Input';
import { WrapperForm } from 'components/Input/Input.styled';
import { WrapperButton } from 'components/RegisterForm/RegisterForm.styled';
import {
  BoxPassword,
  BtnIconEya,
} from 'components/RegisterForm/RegisterForm.styled';
import ButtonAuth from './Login.styled';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);
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
        <BoxPassword>
          <label htmlFor="pin">
            <b>Password</b>
            <Input
              type={isShow ? 'text' : 'password'}
              onChange={handleChange}
              name="password"
              value={password}
              placeholder="Enter your password"
              required
            />
            <BtnIconEya
              type="button"
              onClick={() => setIsShow(prevState => !prevState)}
            >
              {!isShow ? <FaEye /> : <FaEyeSlash />}
            </BtnIconEya>
          </label>
        </BoxPassword>
        <WrapperButton>
          <ButtonAuth type="submite" state={{ from: location }}>
            Log In
          </ButtonAuth>
          <ButtonAuth>Sign up</ButtonAuth>
        </WrapperButton>
      </form>
    </WrapperForm>
  );
};
