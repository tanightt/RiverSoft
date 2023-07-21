import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWallet } from 'config/instance';

export const getTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.get(
        `api/transactions-summary?month=${month}&year=${year}`
      );
      return data || {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
