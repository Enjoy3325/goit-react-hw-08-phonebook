import {
  fetchContacts,
  fetchDeleteContacts,
  fetchAddNewContact,
  fetchPatchContacts,
} from 'redux/contacts/contactsOperations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const setfulfilled = (state, { payload }) => {
  state.status = 'resolved';
  state.items = payload;
  state.error = null;
  // state.isLoading = false;
};

// const setPending = state => {
//   state.status = 'loading';
//   state.error = null;
//   state.isLoading = true;
// };

// const setError = (state, { payload }) => {
//   state.status = 'rejected';
//   state.error = payload;
// };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    // isLoading: false,
    status: 'loading',
    error: null,
    filter: '',
  },
  reducers: {
    chengeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, setfulfilled)
      .addCase(fetchDeleteContacts.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.items = state.items.filter(contact => {
          return contact.id !== payload.id;
        });
      })
      .addCase(fetchAddNewContact.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.items = [...state.items, payload];
      })
      .addCase(fetchPatchContacts.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items[index] = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          fetchDeleteContacts.pending,
          fetchAddNewContact.pending,
          fetchPatchContacts.pending
        ),
        state => {
          // state.isLoading = true;
          state.status = 'loading';
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          fetchDeleteContacts.fulfilled,
          fetchAddNewContact.fulfilled,
          fetchPatchContacts.fulfilled
        ),
        state => {
          // state.isLoading = false;
          state.error = null;
          state.status = 'resolved';
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          fetchDeleteContacts.rejected,
          fetchAddNewContact.rejected,
          fetchPatchContacts.rejected
        ),
        (state, { payload }) => {
          // state.isLoading = false;
          state.error = payload;
          state.status = 'rejected';
        }
      ),

  // builder
  //   .addCase(fetchContacts.pending, setPending)
  //   .addCase(fetchContacts.fulfilled, setfulfilled)
  //   .addCase(fetchContacts.rejected, setError)
  //   .addCase(fetchDeleteContacts.pending, setPending)
  //   .addCase(fetchDeleteContacts.fulfilled, (state, { payload }) => {
  //     state.status = 'resolved';
  //     state.items = state.items.filter(contact => {
  //       return contact.id !== payload.id;
  //     });
  //   })
  //   .addCase(fetchDeleteContacts.rejected, setError)

  //   .addCase(fetchAddNewContact.pending, setPending)
  //   .addCase(fetchAddNewContact.fulfilled, (state, { payload }) => {
  //     state.status = 'resolved';
  //     state.items = [...state.items, payload];
  //   })
  //   .addCase(fetchAddNewContact.rejected, setError);
});

//--- Генератор слайсу
export const { addContacts, deleteContacts, chengeFilter } =
  contactsSlice.actions;

//--- Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
