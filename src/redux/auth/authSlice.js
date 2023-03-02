import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const setPending = state => {
  state.error = null;
};

const setCurrentUserFetch = state => {
  state.isFetchingCurrentUser = true;
  state.error = null;
};
const setError = (state, { payload }) => {
  state.error = payload;
  state.isAuth = false;
};

const initialState = {
  user: {
    name: null,
    email: null,
  },

  token: null,
  error: null,
  isAuth: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logautEction: (state, action) => {
      state.token = null;
      state.user = action;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, setPending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(registerUser.rejected, setError)

      .addCase(loginUser.pending, setPending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, setError)

      .addCase(logoutUser.pending, setPending)
      .addCase(logoutUser.fulfilled, state => {
        state.error = null;
        state.token = null;
        state.user = { name: '', email: '' };
        state.isAuth = false;
      })
      .addCase(logoutUser.rejected, setError)

      .addCase(currentUser.pending, setCurrentUserFetch)
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isAuth = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(currentUser.rejected, setError, state => {
        state.isAuth = false;
      });
  },
});

//--- Генератор слайсу
export const { logautEction } = authSlice.actions;

//--- Редюсер слайсу
export const authReducer = authSlice.reducer;
