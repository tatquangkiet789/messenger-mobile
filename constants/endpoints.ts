export const API_URL = process.env.EXPO_PUBLIC_API_URL as string;

export const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL as string;

export const ENDPOINTS = {
    // Authentication endpoints
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    FETCH_CURRENT_USER_BY_ACCESS_TOKEN: '/auth/current-user',
    REFRESH_TOKEN: '/auth/refresh-token',
    UPDATE_PASSWORD: '/auth/update-password',

    // Message endpoints
    FETCH_ALL_MESSAGES: ({ receiverID, page }: { receiverID: number; page: number }) =>
        `/messages/${receiverID}?page=${page}`,
    CREATE_MESSAGE: '/messages/create',

    // Notification endpoints
    FETCH_ALL_ADD_FRIEND_NOTIFICATIONS: (page: number) => `/notifications/add-friend?page=${page}`,
    CREATE_ADD_FRIEND_NOTIFICATION: `/notifications/add-friend/create`,
    ACCEPT_ADD_FRIEND_NOTIFICATION: `/notifications/add-friend/accept`,
    DECLINE_ADD_FRIEND_NOTIFICATION: `/notifications/add-friend/decline`,
    DELETE_ADD_FRIEND_NOTIFFICATION: `/notifications/add-friend/delete`,

    // User endpoints
    FETCH_10_SUGGESTED_USERS: '/users/suggested',
    FETCH_ALL_USERS_BY_KEYWORD: ({ keyword, page }: { keyword: string; page: number }) =>
        `/users/search?q=${encodeURIComponent(keyword)}?page=${page}`,
    FETCH_ALL_CHAT_USERS: (page: number) => `/users/chat?page=${page}`,
    FETCH_ALL_SUGGESTED_FRIENDS: (page: number) => `/users/friends/suggested?page=${page}`,
};
