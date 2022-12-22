import { loginUser } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/Input/Input';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLogin, setIsLogin] = useState();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    dispatch(loginUser(loginData));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label>
          <b>Email</b>
          <Input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
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
        <button type="submite">Log In</button>
        <NavLink to={'/register'} state={{ from: location }}>
          Sign up
        </NavLink>
      </form>
    </div>
  );
};
