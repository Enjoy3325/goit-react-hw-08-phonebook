import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from '../../components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { LogIn } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Page404 } from 'pages/Page404/Page404';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const selectorName = useSelector(state => state.auth.user.name);
  const selectorToken = useSelector(state => state.auth.token);
  useEffect(() => {
    if (selectorToken && !selectorName) {
      dispatch(currentUser());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={selectorToken ? <Navigate to={'/contacts'} /> : <LogIn />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contacts"
          element={!selectorToken ? <Navigate to={'/login'} /> : <Contacts />}
        />
        <Route path="/*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
