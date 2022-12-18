// import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { Password } from 'components/Password/Password';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
  const location = useLocation();

  return (
    <div>
      <form>
        <label>
          <b>Name</b>
          <input type="text" name="name" placeholder="Jack" required></input>
        </label>
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
        <button type="submit">Sign In</button>
        <NavLink to={'login'} state={{ from: location }}>
          Log in
        </NavLink>
      </form>
    </div>
  );
};
