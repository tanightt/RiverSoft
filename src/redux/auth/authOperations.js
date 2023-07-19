import { instanceWallet, setAuthHeader } from "config/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const login = createAsyncThunk('auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const response = await instanceWallet.post('api/auth/sign-in', body)
            console.log(response)
            setAuthHeader(response.data.token)
            return response.data
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
        }
    }
)
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
            console.log(error)
        }
    }
)