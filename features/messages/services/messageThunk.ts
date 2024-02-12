import { ErrorResponse } from '@/lib/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { createMessageService, fetchAllMessagesService } from './messageService';

export const fetchAllMessagesThunk = createAsyncThunk(
    'fetchAllMessagesThunk',
    async ({ receiverID, page }: { receiverID: number; page: number }, { rejectWithValue }) => {
        try {
            const data = await fetchAllMessagesService({ page, receiverID });
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);

export const createMessageThunk = createAsyncThunk(
    'createNewMessage',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const data = await createMessageService(formData);
            return data;
        } catch (error) {
            const err = error as ErrorResponse;
            if (!err.response) throw err;
            return rejectWithValue(err.response.data);
        }
    },
);
