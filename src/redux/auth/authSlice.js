import {
  fetchUsersSignup,
  fetchUsersLogin,
  fetchUsersLogout,
  fetchUsersCurrent,
} from './authOperations';

import { createSlice } from '@reduxjs/toolkit';

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setfulfilled = (state, { payload }) => {
  state.status = 'resolved';
  state.items = payload;
};

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: {
      name: null,
      email: null,
    },
    isLoading: false,
    token: null,
    error: null,
    isAuth: false,
  },
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchUsersLogin.pending, setPending);
    builder.addCase(fetchUsersLogin.fulfilled, setfulfilled);
    builder.addCase(fetchUsersLogin.rejected, setError);

    builder.addCase(fetchUsersLogout.pending, setPending);
    builder.addCase(fetchUsersLogout.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.users = state.users.filter(user => {
        return user.id !== payload.id;
      });
    });
    builder.addCase(fetchUsersCurrent.pending, setPending);
    builder.addCase(fetchUsersCurrent.fulfilled, setfulfilled);
    builder.addCase(fetchUsersCurrent.rejected, setError);

    builder.addCase(fetchUsersSignup.pending, setPending);
    builder.addCase(fetchUsersSignup.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.users = [...state.users, payload];
    });
    builder.addCase(fetchUsersSignup.rejected, setError);
  },
});

//--- Генератор слайсу
// export const { addContacts, deleteContacts, chengeFilter } = authSlice.actions;

//--- Редюсер слайсу
export const authReducer = authSlice.reducer;
