const { createSlice } = require('@reduxjs/toolkit');
const { getTransactions } = require('./statisticsOperation');

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: {
      categoriesSummary: [],
      incomeSummary: 0,
      expenseSummary: 0,
      periodTotal: 0,
      year: 0,
      month: 0,
    },
  },
  extraReducers: builder => {
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.transactions = payload;
      // state.transactions.year = payload.year;
      // state.transactions.month = payload.month;
    });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
