import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
const {
  getTransactionThunk,
  deleteTransactionThunk,
  addTransactionThunk,
  getCategoriesThunk,
} = require('./transactionsOperations');

const initialState = {
  finance: [],
  loading: 'false',
  error: null,
  categories: [],
  categoriesLoading: false,
  categoriesError: null,
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
      .addCase(addTransactionThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.finance.push(action.payload);
      })
      .addCase(addTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(getCategoriesThunk.pending, (state, action) => {
        state.categoriesLoading = true;
        state.categoriesError = null;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.categoriesError = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(getTransactionThunk.fulfilled, (state, action) => {
        state.finance = action.payload;
        state.loading = false;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        const index = state.finance.findIndex(
          el => el.id === action.payload.id
        );
        state.finance.splice(index, 1);
        state.loading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pending)
      .addMatcher(action => action.type.endsWith('/rejected'), rejected);
  },
});

export const transactionReducer = transactionSlice.reducer;
