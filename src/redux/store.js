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

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};


const authPersistedReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: authPersistedReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);
