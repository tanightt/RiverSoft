import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { modalReducer } from './global/slice';
import { currencyReducer } from './currency/currencySlice';
import { transactionReducer } from './transactions/transactionsSlice';
import { transactionsReducer } from './statistics/statisticsSlice';
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistCurrencyConfig = {
  key: 'currencyDate',
  storage,
  whitelist: ['USD', 'EUR', 'currencyDate'],
};

const authPersistedReducer = persistReducer(authConfig, authReducer);
const currencyPersistedReducer = persistReducer(
  persistCurrencyConfig,
  currencyReducer
);

export const store = configureStore({
  reducer: {
    transaction: transactionsReducer,
    auth: authPersistedReducer,
    modal: modalReducer,
    currency: currencyPersistedReducer,
    transactions: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
