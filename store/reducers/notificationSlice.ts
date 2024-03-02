import { Notification, fetchAllAddFriendNotificationsThunk } from '@/features/notifications';
import { ErrorResponse } from '@/lib/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type NotificationState = {
    addFriendNotifications: Notification[];
    isLoading: boolean;
    error: string;
    isLastPage: boolean;
    isNewList: boolean;
};

const initialState: NotificationState = {
    addFriendNotifications: [],
    isLastPage: false,
    error: '',
    isLoading: false,
    isNewList: false,
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        toggleIsNewAddFriendNotificationList: (state, action: PayloadAction<boolean>) => {
            state.isNewList = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllAddFriendNotificationsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchAllAddFriendNotificationsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLastPage = action.payload.isLastPage;
                const notifications = action.payload.content as Notification[];
                if (state.isNewList) {
                    state.addFriendNotifications = notifications;
                } else {
                    state.addFriendNotifications = [
                        ...state.addFriendNotifications,
                        ...notifications,
                    ];
                }
            })
            .addCase(fetchAllAddFriendNotificationsThunk.rejected, (state, action) => {
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

export const { toggleIsNewAddFriendNotificationList } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
