import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperations';
import { Input } from 'components/Input/Input';
import { WrapperForm } from 'components/Input/Input.styled';
import {
  ButtonDelate,
  WrapperButton,
  BoxPassword,
  BtnIconEya,
} from './RegisterForm.styled';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  // Контрольований інпут
  // const handleNameChange = event => setName(event.target.value);
  // const handleEmailChange = event => setEmail(event.target.value);
  // const handlePasswordChange = event => setPassword(event.target.value);

  // const handleClick = () => setShow(!show);
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleRegisterSubmit = e => {
    e.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <WrapperForm>
      <form onSubmit={handleRegisterSubmit}>
        <label>
          <b>Name</b>
          <Input
            onChange={handleChange}
            placeholder="Jack"
            type="text"
            name="name"
            required
            value={name}
          />
        </label>
        <label>
          <b>Email</b>

          <Input
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
            onChange={handleChange}
            value={email}
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
          <ButtonDelate
            to={'/contacts'}
            type="submit"
            state={{ from: location }}
          >
            Sign Up
          </ButtonDelate>

          {/* <LinkHeader to={'/login'} state={{ from: location }}>
            Log in
          </LinkHeader> */}
        </WrapperButton>
      </form>
    </WrapperForm>
  );
};
