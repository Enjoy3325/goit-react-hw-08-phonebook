// import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { registerUser } from 'redux/auth/authOperations';
import { Input } from 'components/Input/Input';
import { LinkHeader } from 'components/Header/Header.styled';
import { WrapperForm } from 'components/Input/Input.styled';
import { ButtonDelate, WrapperButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [show, setShow] = useState(false);

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
    const registerData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(registerData));
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
          {/* <button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </button> */}
        </label>
        <WrapperButton>
          <ButtonDelate to={'/register'} type="submit">
            Sign Up
          </ButtonDelate>

          <LinkHeader to={'/login'} state={{ from: location }}>
            Log in
          </LinkHeader>
        </WrapperButton>
      </form>
    </WrapperForm>
  );
};
