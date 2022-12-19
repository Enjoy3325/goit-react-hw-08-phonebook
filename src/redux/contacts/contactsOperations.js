import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PrivateApi } from 'http/http';

// Отримання контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await PrivateApi.get('/contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  Додавання контактів
export const fetchAddNewContact = createAsyncThunk(
  'contacts/fetchAddNewContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await PrivateApi.post(`/contacts`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Видалення контактів
export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await PrivateApi.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Зміна контактів, пошук
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

// // отримання контактів
// export const fetchContact = createAsyncThunk(
//   '/contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// Фетч додавання контактів
// export const fetchAddContacts = createAsyncThunk(
//   '/contacts/fetchAddContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/contacts');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// Видалення контактів по id
// export const fetchDeleteContact = createAsyncThunk(
//   '/contacts/fetchDeleteContact',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete('/contacts/{contactId}');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
