import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Регістрація
export const fetchUsersSignup = createAsyncThunk(
  '/users/fetchUsersSignup',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', {
        name: null,
        email: null,
        password: null,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Логінізація
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

//  вихід з особистого кабінету, вилогування
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

//Юзерс поточний
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
