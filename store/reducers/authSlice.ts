import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentUserByAccessTokenThunk, loginThunk, logoutThunk } from '@/features/auth';
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
                state.isAuthenticated = true;
                console.log(`loginThunk.fulfilled`);
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
                console.log(`fetchCurrentUserByAccessTokenThunk.fulfilled`);
                state.isLoading = false;
                state.user = action.payload.content as User;
                state.isAuthenticated = true;
            })
            .addCase(fetchCurrentUserByAccessTokenThunk.rejected, (state, action) => {
                state.isLoading = false;
                const error = action.payload as ErrorResponse;
                if (error) {
                    state.error = error.message;
                } else {
                    console.error(action.error.message);
                }
            })
            .addCase(logoutThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null as any;
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                const logoutMessage = action.payload.message as string;
                console.log(logoutMessage);
            })
            .addCase(logoutThunk.rejected, (state, action) => {
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
