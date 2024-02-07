import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentUserByAccessTokenThunk, loginThunk } from '@/features/auth';
import { User } from '@/features/users';
import { ErrorResponse } from '@/lib/utils';

type AuthState = {
    isAuthenticated: boolean;
    user: User;
    isLoading: boolean;
    error: string;
};

const initialState: AuthState = {
    error: null as any,
    isLoading: false,
    isAuthenticated: false,
    user: null as any,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null as any;
            })
            .addCase(loginThunk.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                const error = action.payload as ErrorResponse;
                if (error) {
                    state.error = error.message;
                } else {
                    console.error(action.error.message);
                }
            })
            .addCase(fetchCurrentUserByAccessTokenThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null as any;
            })
            .addCase(fetchCurrentUserByAccessTokenThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.content as User;
            })
            .addCase(fetchCurrentUserByAccessTokenThunk.rejected, (state, action) => {
                state.isLoading = false;
                const error = action.payload as ErrorResponse;
                if (error) {
                    state.error = error.message;
                } else {
                    console.error(action.error.message);
                }
            });
    },
});

export const authReducer = authSlice.reducer;
