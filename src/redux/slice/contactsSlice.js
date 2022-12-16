import {
  fetchContacts,
  fetchDeleteContacts,
  fetchAddNewContact,
} from 'redux/operations';
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
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    status: null,
    error: null,
    filter: '',
  },
  reducers: {
    chengeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.fulfilled, setfulfilled);
    builder.addCase(fetchContacts.rejected, setError);

    builder.addCase(fetchDeleteContacts.pending, setPending);
    builder.addCase(fetchDeleteContacts.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.items = state.items.filter(contact => {
        return contact.id !== payload.id;
      });
    });
    builder.addCase(fetchDeleteContacts.rejected, setError);

    builder.addCase(fetchAddNewContact.pending, setPending);
    builder.addCase(fetchAddNewContact.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.items = [...state.items, payload];
    });
    builder.addCase(fetchAddNewContact.rejected, setError);
  },
});

//--- Генератор слайсу
export const { addContacts, deleteContacts, chengeFilter } =
  contactsSlice.actions;

//--- Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
