import { configureStore } from '@reduxjs/toolkit';

import { authReducer, chatReducer, messageReducer, userReducer } from './reducers';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        chats: chatReducer,
        users: userReducer,
        messages: messageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
