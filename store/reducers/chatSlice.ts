import { Chat } from '@/features/chats';
import { fetchAllChatUsersThunk } from '@/features/chats/services/chatThunk';
import { ErrorResponse } from '@/lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ChatState = {
    chats: Chat[];
    isLastPage: boolean;
    isLoading: boolean;
    error: string;
    isNewList: boolean;
    searchChatUsersKeyword: string;
};

const initialState: ChatState = {
    chats: [],
    isLastPage: false,
    isLoading: false,
    error: '',
    isNewList: false,
    searchChatUsersKeyword: '',
};

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        toggleIsNewList: (state, action: PayloadAction<boolean>) => {
            state.isNewList = action.payload;
        },
        updateSearchChatUsersKeyword: (state, action: PayloadAction<string>) => {
            state.searchChatUsersKeyword = action.payload;
        },
        clearSearchChatUsersKeyword: (state) => {
            state.searchChatUsersKeyword = '';
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllChatUsersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchAllChatUsersThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLastPage = action.payload.isLastPage;
                const chatUsers = action.payload.content as Chat[];
                if (state.isNewList) {
                    state.chats = chatUsers;
                } else {
                    state.chats = [...state.chats, ...chatUsers];
                }
            })
            .addCase(fetchAllChatUsersThunk.rejected, (state, action) => {
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

export const { toggleIsNewList, updateSearchChatUsersKeyword, clearSearchChatUsersKeyword } =
    chatSlice.actions;

export const chatReducer = chatSlice.reducer;
