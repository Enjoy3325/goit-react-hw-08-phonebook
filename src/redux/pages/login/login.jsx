import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { Password } from 'components/Password/Password';
import { Register } from '../Register/Register';

export const LogIn = () => {
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
            autocomplete
          ></input>
        </label>
        <label for="pin">
          <b>Password</b>
          <Password />
        </label>
        <button type="submite">Log In</button>
        <ButtonBack />
        <Register />
      </form>
    </div>
  );
};
