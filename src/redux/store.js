import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authPersistReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
