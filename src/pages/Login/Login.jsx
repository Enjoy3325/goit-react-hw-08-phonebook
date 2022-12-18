// import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import { Password } from '../../components/Password/Password';

export const LogIn = () => {
  // const fromRef = useRef(location?.state?.from);
  const location = useLocation();
  return (
    <div>
      <form>
        <label>
          <b>Email</b>
          <input
            type="email"
            name="email"
            placeholder="arhnold@gmail.com"
            required
          ></input>
        </label>
        <label htmlFor="pin">
          <b>Password</b>
          <Password />
        </label>
        <button type="submite">Log In</button>
        <NavLink to={'register'} state={{ from: location }}>
          Sign up
        </NavLink>
      </form>
    </div>
  );
};
