import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../../components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { LogIn } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Page404 } from 'pages/Page404/Page404';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { currentUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <ChakraProvider>
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LogIn />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route path="/*" element={<Page404 />} />
            </Route>
          </Routes>
        )}
      </ChakraProvider>
    </>
  );
};
