import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceMono } from 'config/instance';

export const getCurrencyThunk = createAsyncThunk(
  'currency/getCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instanceMono.get();

      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
