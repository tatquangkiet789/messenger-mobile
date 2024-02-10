import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllUsersByKeywordService } from './userService';
import { ErrorResponse } from '@/lib/utils';

export const fetchAllUsersByKeywordThunk = createAsyncThunk(
    'fetchAllUsersByKeywordThunk',
    async ({ keyword, page }: { keyword: string; page: number }, { rejectWithValue }) => {
        try {
            const data = await fetchAllUsersByKeywordService({ keyword, page });
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
