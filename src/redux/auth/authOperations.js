import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Регістрація
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name: name,
        email: email,
        password: password,
      });

      token.set(data.token);
      return data;
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
      const { data } = await axios.post('/users/login', {
        email: email,
        password: password,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  Вихід з особистого кабінету, вилогування
export const logoutUser = createAsyncThunk(
  '/auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Юзерс поточний
export const currentUser = createAsyncThunk(
  '/auth/currentUser',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const tokenA = thunkAPI.getState().auth.token;

    if (!tokenA) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(tokenA);
    try {
      // If there is a token, add it to the HTTP header and perform the request
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
