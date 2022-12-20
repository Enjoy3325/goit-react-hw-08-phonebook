// import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { registerUser } from 'redux/auth/authOperations';
import { useState } from 'react';
import { Input } from 'components/Input/Input';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  // Контрольований інпут
  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const registerData = {
      name,
      email,
      password,
    };
    console.log('registerData :>> ', registerData);
    dispatch(registerUser(registerData));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <label>
          <b>Name</b>
          <Input
            onChange={handleNameChange}
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
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label htmlFor="pin">
          <b>Password</b>
          <Input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Sign In</button>
        <NavLink to={'/login'} state={{ from: location }}>
          Log in
        </NavLink>
      </form>
    </div>
  );
};
