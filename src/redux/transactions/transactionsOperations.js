import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceWallet } from 'config/instance';
import { toast } from 'react-toastify';

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
      await instanceWallet.delete(`/api/transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().transactions.loading;
      console.log(loading);
      if (loading) {
        return false;
      }
    },
  }
);

export const patchTransactionThunk = createAsyncThunk(
  'transaction/patchTransaction',
  async (
    { id, transactionDate, type, categoryId, comment, amount },
    { rejectWithValue }
  ) => {
    try {
      const body = { transactionDate, type, categoryId, comment, amount };
      const { data } = await instanceWallet.patch(
        `/api/transactions/${id}`,
        body
      );
      toast.success('Transaction edited seccesfully!');
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
      toast.success('Transaction added');
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
