import { createSelector } from '@reduxjs/toolkit';

export const selectFinance = state => state.transactions.finance;
export const selectCategories = state => state.transactions.categories;
export const selectLoading = state => state.transactions.loading;

export const selectFinanseSort = createSelector([selectFinance], items => {
  return [...items]
    .reverse()
    .sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate));
});
