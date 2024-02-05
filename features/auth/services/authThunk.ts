import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginDTO } from '../dtos/login';
import {
    loginService,
    registerService,
    updatePasswordService,
    logoutService,
    fetchCurrentUserByAccessTokenService,
} from './authService';
import { ErrorResponse } from '@/lib/utils';

export const loginThunk = createAsyncThunk(
    'loginThunk',
    async (loginDTO: LoginDTO, { rejectWithValue }) => {
        try {
            console.log('loginThunk');
            const data = await loginService(loginDTO);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);

export const registerThunk = createAsyncThunk(
    'registerThunk',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const data = await registerService(formData);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);

export const updatePasswordThunk = createAsyncThunk(
    'updatePasswordThunk',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const data = await updatePasswordService(formData);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);

export const logoutThunk = createAsyncThunk('logoutThunk', async (_, { rejectWithValue }) => {
    try {
        const data = await logoutService();
        return data;
    } catch (error) {
        const err = error as ErrorResponse;
        if (!err.response) throw err;
        return rejectWithValue(err.response.data);
    }
});

export const fetchCurrentUserByAccessTokenThunk = createAsyncThunk(
    'fetchCurrentUserByAccessTokenThunk',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchCurrentUserByAccessTokenService();
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
