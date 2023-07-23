import { createSlice } from '@reduxjs/toolkit';

const {
  getTransactionThunk,
  deleteTransactionThunk,
  addTransactionThunk,
  getCategoriesThunk,
  patchTransactionThunk,
} = require('./transactionsOperations');

const initialState = {
  finance: [],
  loading: 'false',
  error: null,
  categories: [],
};

const pending = state => {
  state.loading = true;
  state.error = '';
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const transactionSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.finance.push(action.payload);
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getTransactionThunk.fulfilled, (state, action) => {
        state.finance = action.payload;
        state.loading = false;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        const index = state.finance.findIndex(el => el.id === action.payload);
        state.finance.splice(index, 1);
        state.loading = false;
      })
      .addCase(patchTransactionThunk.fulfilled, (state, action) => {
        const index = state.finance.findIndex(el => el.id === action.payload);
        state.finance.splice(index, 1);
        state.loading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const transactionReducer = transactionSlice.reducer;
