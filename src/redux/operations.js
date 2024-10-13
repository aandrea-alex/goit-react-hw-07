import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../api/axiosInst';

import {
  SUCCESS_ADD,
  ERR_ADD,
  SUCCESS_DELETE,
  ERR_DELETE,
} from '../notification/constants';
import { errNotify } from '../notification/error-notify';
import { successNotify } from '../notification/success-notify';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInst.get("contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const response = await axiosInst.post("contacts", values);
      successNotify(SUCCESS_ADD);
      return response.data;
    } catch (error) {
      errNotify(ERR_ADD);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "$contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInst.delete(`contacts/${id}`);
      successNotify(SUCCESS_DELETE);
      return response.data;
    } catch (error) {
      errNotify(ERR_DELETE);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
