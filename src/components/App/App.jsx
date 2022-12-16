// import { chengeFilter } from 'redux/slice/contactsSlice';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../../components/Navigation/Navigation';
// import { Home } from 'redux/pages/home/home';
// import { Register } from '../../redux/pages/register/register';
// import { LogIn } from 'redux/pages/login/login';
// import { Contacts } from 'redux/pages/contacts/contacts';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const Home = lazy(() => import('../../pages/home/home'));
const Register = lazy(() => import('../../pages/register/register'));
const LogIn = lazy(() => import('../../pages/login/login'));
const Contacts = lazy(() => import('../../pages/contacts/contacts'));
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const App = () => {
  const dispatch = useDispatch();
  const { error, status } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigation to="/" />} />
      </Route>
    </Routes>
  );
};
