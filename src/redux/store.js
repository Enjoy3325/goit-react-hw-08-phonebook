import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
