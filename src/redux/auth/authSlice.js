import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from './authOperations';

import { createSlice } from '@reduxjs/toolkit';

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isLoading: false,
    token: null,
    error: null,
    isAuth: false,
  },
  reducers: {
    logautEction: (state, action) => {
      state.token = null;
      state.user = action;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, setPending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, setError)

      .addCase(logoutUser.pending, setPending)
      .addCase(logoutUser.fulfilled, state => {
        state.status = 'resolved';
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isAuth = false;
      })

      .addCase(currentUser.pending, setPending)
      .addCase(currentUser.fulfilled, (state, action) => {
        state.status = 'resolved';

        state.user = action.payload;
      })
      .addCase(currentUser.rejected, setError)

      .addCase(registerUser.pending, setPending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, setError);
  },
});

//--- Генератор слайсу
export const { logautEction } = authSlice.actions;

//--- Редюсер слайсу
export const authReducer = authSlice.reducer;
