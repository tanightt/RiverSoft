import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWallet } from 'config/instance';

export const getTransactionThunk = createAsyncThunk(
  'transaction/getTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.get('/api/transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.delete(`/api/transactions${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().contacts.loading;
      if (loading) {
        return false;
      }
    },
  }
);

export const patchTransactionThunk = createAsyncThunk(
  'transaction/patchTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.patch(`/api/transactions/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.post(
        '/api/transactions',
        transaction
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'transaction/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instanceWallet.get('api/transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
