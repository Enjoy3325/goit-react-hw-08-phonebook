import { contactsReducer } from './slice/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});
