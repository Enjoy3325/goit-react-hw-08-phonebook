import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../../components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { LogIn } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Page404 } from 'pages/Page404/Page404';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
