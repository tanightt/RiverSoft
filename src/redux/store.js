import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { modalReducer } from './global/slice';

// const modalPersistConfig = {
//     key,

// };

// import {modalReducer} from './modal/slice.js'

// const persistConfig = {
//   key: 'todos',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
