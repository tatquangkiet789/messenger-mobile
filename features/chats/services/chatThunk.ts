import { ErrorResponse } from '@/lib/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllChatUsersService } from './chatService';

export const fetchAllChatUsersThunk = createAsyncThunk(
    'fetchAllChatUsersThunk',
    async (page: number, { rejectWithValue }) => {
        try {
            const data = await fetchAllChatUsersService(page);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
