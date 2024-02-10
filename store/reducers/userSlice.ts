import { SearchUser, fetchAllUsersByKeywordThunk } from '@/features/users';
import { ErrorResponse } from '@/lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
    searchResult: SearchUser[];
    isLoading: boolean;
    error: string;
    isNewList: boolean;
    isLastPage: boolean;
    searchKeyword: string;
};

const initialState: UserState = {
    searchResult: [],
    isLoading: false,
    error: '',
    isNewList: false,
    isLastPage: false,
    searchKeyword: '',
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleIsNewSearchList: (state, action: PayloadAction<boolean>) => {
            state.isNewList = action.payload;
        },
        updateSearchKeyword: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload;
        },
        clearSearchKeyword: (state) => {
            state.searchKeyword = '';
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllUsersByKeywordThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null as any;
            })
            .addCase(fetchAllUsersByKeywordThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLastPage = action.payload.isLastPage;
                const users = action.payload.content as SearchUser[];
                if (state.isNewList) {
                    state.searchResult = users;
                } else {
                    state.searchResult = [...state.searchResult, ...users];
                }
            })
            .addCase(fetchAllUsersByKeywordThunk.rejected, (state, action) => {
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

export const { toggleIsNewSearchList, updateSearchKeyword, clearSearchKeyword } = userSlice.actions;

export const userReducer = userSlice.reducer;
