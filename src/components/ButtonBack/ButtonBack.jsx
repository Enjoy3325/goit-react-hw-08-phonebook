import { NavLink, useLocation } from 'react-router-dom';
export const ButtonBack = () => {
  const location = useLocation();

  return (
    <>
      <NavLink to={'/'} state={{ from: location }}>
        <b>Go back</b>
      </NavLink>
    </>
  );
};
