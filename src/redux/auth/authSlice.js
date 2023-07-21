import { createSlice, isAnyOf, createAction } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser } from './authOperations';
const resetStateAction = createAction('auth/resetState');

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
    extraReducers: builder => {
        const handlePending = state => {
            state.isLoading = true;
            state.isError = '';
            state.isRefresher = true;
        };
        const handleFulfilled = (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
            state.isLoading = false;
            state.isRefresher = false;
        };
        const handleRejected = (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
            state.isRefresher = false;
        };
        builder
            .addCase(logOut.fulfilled, state => {
                state.isAuth = false;
                state.token = '';
                state.user = null;
            })
            .addCase(logOut.rejected, state => {
                state.isAuth = false;
                state.token = '';
                state.user = null;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isAuth = true;
                state.isLoading = false;
                state.isRefresher = false;
            })
            .addCase(resetStateAction, () => initialState)
            .addMatcher(
                isAnyOf(
                    register.pending,
                    login.pending,
                    refreshUser.pending,
                    logOut.pending
                ),
                handlePending
            )
            .addMatcher(isAnyOf(register.fulfilled, login.fulfilled), handleFulfilled)
            .addMatcher(
                isAnyOf(
                    register.rejected,
                    login.rejected,
                    refreshUser.rejected,
                ),
                handleRejected
            );
    },
});
export const authReducer = authSlice.reducer;
export const resetAuthState = resetStateAction;
