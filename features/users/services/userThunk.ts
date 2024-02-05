import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersByKeywordService } from './userService';
import { AxiosError } from '@/lib/utils/axios';

export const fetchUsersByKeywordThunk = createAsyncThunk(
    'users/fetchUsersByKeywordThunk',
    async ({ keyword }: { keyword: string }, { rejectWithValue }) => {
        try {
            const data = await fetchUsersByKeywordService({ keyword });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
