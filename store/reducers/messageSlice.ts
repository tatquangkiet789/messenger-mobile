import { Message, createMessageThunk, fetchAllMessagesThunk } from '@/features/messages';
import { ErrorResponse } from '@/lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type MessageState = {
    isLoading: boolean;
    error: string;
    messages: Message[];
    isNewList: boolean;
    isLastPage: boolean;
};

const initialState: MessageState = {
    isLastPage: false,
    isLoading: false,
    error: '',
    messages: [],
    isNewList: false,
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        toggleIsNewMessageList: (state, action: PayloadAction<boolean>) => {
            state.isNewList = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllMessagesThunk.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchAllMessagesThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLastPage = action.payload.isLastPage;
                const messages = action.payload.content as Message[];
                if (state.isNewList) {
                    state.messages = messages;
                } else {
                    state.messages = [...state.messages, ...messages];
                }
            })
            .addCase(fetchAllMessagesThunk.rejected, (state, action) => {
                state.isLoading = false;
                const error = action.payload as ErrorResponse;
                if (error) {
                    state.error = error.message;
                } else {
                    console.error(action.error.message);
                }
            })
            .addCase(createMessageThunk.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(createMessageThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                const newMessage = action.payload.content as Message;
                state.messages = [...state.messages, newMessage];
            })
            .addCase(createMessageThunk.rejected, (state, action) => {
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

export const { toggleIsNewMessageList } = messageSlice.actions;

export const messageReducer = messageSlice.reducer;
