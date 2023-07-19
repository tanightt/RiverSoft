import { createSlice } from '@reduxjs/toolkit';
import { getCurrencyThunk } from './currencyOperations';

const initialState = {
  USD: {},
  EUR: {},
  isLoading: false,
  error: null,
  currencyDate: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    refreshCurrencyDate(state, { payload }) {
      state.currencyDate = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCurrencyThunk.fulfilled, (state, { payload }) => {
        state.USD = payload.find(
          el => el.currencyCodeA === 840 && el.currencyCodeB === 980
        );
        state.EUR = payload.find(
          el => el.currencyCodeA === 978 && el.currencyCodeB === 980
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCurrencyThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrencyThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
export const { refreshCurrencyDate } = currencySlice.actions;
