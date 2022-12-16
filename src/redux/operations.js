import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6398225e044fa481d692544c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts/contacts');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/fetchDeleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/contacts/${id}`);
      console.log('response :>> ', response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddNewContact = createAsyncThunk(
  'contacts/fetchAddNewContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts/contacts`, contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
