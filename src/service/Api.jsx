import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Фетч Юзерс поточний
export const fetchUsersCurrent = createAsyncThunk(
  '/users/fetchUsersCurrent',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч Сігнап
export const fetchUsersSignup = createAsyncThunk(
  '/users/fetchUsersSignup',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч Логінізації
export const fetchUsersLogin = createAsyncThunk(
  '/users/fetchUsersLogin',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч вихід з особистого кабінету, вилогування
export const fetchUsersLogout = createAsyncThunk(
  '/users/fetchUsersLogout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Фетч отримання контактів
export const fetchContacts = createAsyncThunk(
  '/contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч додавання контактів
export const fetchAddContacts = createAsyncThunk(
  '/contacts/fetchAddContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч видалення контактів по id
export const fetchDeleteContacts = createAsyncThunk(
  '/contacts/fetchDeleteContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.delete('/contacts/{contactId}');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Фетч зміна контактів, пошук
export const fetchPatchContacts = createAsyncThunk(
  '/contacts/fetchPatchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/contacts/{contactId}');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
