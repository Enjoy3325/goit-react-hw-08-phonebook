import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
export const ButtonBack = () => {
  const location = useLocation();
  const fromRef = useRef(location?.state?.from);

  return (
    <>
      <NavLink to={fromRef?.current} state={{ from: location }}>
        <b>Go back</b>
      </NavLink>
    </>
  );
};
