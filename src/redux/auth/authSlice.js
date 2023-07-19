import { createSlice } from '@reduxjs/toolkit';

import {
    logOut,
    login,
    refreshUser,
    register
} from './authOperations';

const initialState = {
    user: null,
    token: '',
    isAuth: false,
    isRefresher: false,
    isLoading: false,
    isError: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
            state.isError = '';
        })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isAuth = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.isRefresher = false;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isError = '';
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isAuth = true;
                state.isLoading = false;

            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.isRefresher = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isLoading = true;
                state.isError = '';
                state.isRefresher = true;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isAuth = true;
                state.isLoading = false;
                state.isRefresher = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message;
                state.isRefresher = false;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuth = false;
                state.isRefresher = false;
                state.token = '';
                state.user = initialState.user
            }).addCase(logOut.pending, (state) => {
                state.isError = '';
            }).addCase(logOut.rejected, () => initialState)
    },
});


export const authReducer = authSlice.reducer;