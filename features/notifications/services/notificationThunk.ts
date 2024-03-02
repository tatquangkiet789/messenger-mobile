import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllAddFriendNotificationsService } from './notificationService';
import { ErrorResponse } from '@/lib/utils';

export const fetchAllAddFriendNotificationsThunk = createAsyncThunk(
    'fetchAllAddFriendNotificationsThunk',
    async (page: number, { rejectWithValue }) => {
        try {
            const data = await fetchAllAddFriendNotificationsService(page);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
