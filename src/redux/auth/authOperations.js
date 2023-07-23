import { instanceWallet, setAuthHeader } from "config/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const register = createAsyncThunk('auth/register',
    async (body, { rejectWithValue }) => {
        try {
            const response = await instanceWallet.post('api/auth/sign-up', body)
            setAuthHeader(response.data.token);
            toast.success("Registration was successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            });
            return rejectWithValue(error)
        }
    })
export const login = createAsyncThunk('auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const response = await instanceWallet.post('api/auth/sign-in', body);
            setAuthHeader(response.data.token);
            toast.success("Login was successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            });
            const { data } = error.response;
            return rejectWithValue(data);
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
        const response = await instanceWallet.delete('api/auth/sign-out');
        toast.success("Logout was successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});