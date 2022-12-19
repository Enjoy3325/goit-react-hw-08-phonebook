import { createAsyncThunk } from '@reduxjs/toolkit';

import { PrivateApi, PublicApi, token } from 'http/http';

// Регістрація
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await PublicApi.post('/users/signup', {
        name: name,
        email: email,
        password: password,
      });

      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логінізація
export const loginUser = createAsyncThunk(
  '/auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await PublicApi.post('/users/login', {
        email: email,
        password: password,
      });
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  вихід з особистого кабінету, вилогування
export const logoutUser = createAsyncThunk(
  '/auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await PrivateApi.post('/users/logout');
      token.unset();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Юзерс поточний
export const currentUser = createAsyncThunk(
  '/auth/currentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const tokenValue = state.auth.token;
    try {
      token.set(tokenValue);
      const response = await PrivateApi.get('/users/current');
      // token.set(response.data.token);
      console.log('response.data :>> ', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
