import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { Password } from 'components/Password/Password';

export const Register = () => {
  return (
    <div>
      <form>
        <label>
          <b>Name</b>
          <input
            type="text"
            name="name"
            placeholder="Jack"
            required
            autocomplete
          ></input>
        </label>
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
        <button type="submit">Sign In</button>
        <ButtonBack />
      </form>
    </div>
  );
};
