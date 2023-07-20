import { instanceWallet, setAuthHeader, clearAuthHeader } from "config/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const register = createAsyncThunk('auth/register',
    async (body, { rejectWithValue }) => {
        try {
            const response = await instanceWallet.post('api/auth/sign-up', body)
            setAuthHeader(response.data.token);
            return response.data

        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return rejectWithValue(error)
        }
    })
export const login = createAsyncThunk('auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const response = await instanceWallet.post('api/auth/sign-in', body);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            toast.error('Email or password is incorrect', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            const { status, data } = error.response;
            if (status === 400 || status === 403 || status === 404) {
                return rejectWithValue(data);
            }
        }
    }

);
export const refreshUser = createAsyncThunk(
    'auth/getUser',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const tokenValue = state.auth.token;
            if (!tokenValue) {
                return rejectWithValue();
            }
            setAuthHeader(tokenValue);
            const response = await instanceWallet.get('api/users/current');
            return response.data;
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const logOut = createAsyncThunk("auth/logout", async (
    _, { rejectWithValue }) => {
    try {
        clearAuthHeader()
        const response = await instanceWallet.delete('api/auth/sign-out');
        return response
    } catch (error) {
        rejectWithValue(error)
    }
}
)