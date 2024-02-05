export const API_URL = process.env.EXPO_PUBLIC_API_URL as string;

export const SOCKET_URL = process.env.EXPO_PUBLIC_SOCKET_URL as string;

export const ENDPOINTS = {
    // Authentication endpoints
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    GET_CURRENT_USER_BY_ACCESS_TOKEN: '/auth/current-user',
    REFRESH_TOKEN: '/auth/refresh-token',
    UPDATE_PASSWORD: '/auth/update-password',

    // Friend endpoints
    FIND_ALL_FRIENDS: ({ page }: { page: number }) => `/friends?page=${page}`,

    // Message endpoints
    FIND_ALL_MESSAGES: ({ userID, page }: { userID: number; page: number }) =>
        `/messages/${userID}?page=${page}`,
    CREATE_NEW_MESSAGE: '/messages/create',

    // Notification endpoints
    FIND_ALL_ADD_FRIEND_NOTIFICATIONS: ({ page }: { page: number }) =>
        `/notifications?page=${page}`,
    CREATE_ADD_FRIEND_NOTIFICATION: `/notifications/add-friend`,
    ACCEPT_ADD_FRIEND_NOTIFICATION: `/notifications/accept`,
    DECLINE_ADD_FRIEND_NOTIFICATION: `/notifications/decline`,
    DELETE_ADD_FRIEND_NOTIFFICATION: `/notifications/delete`,

    // User endpoints
    FIND_ALL_USERS_BY_KEYWORD: ({ keyword, page }: { keyword: string; page: number }) =>
        `/users/search?q=${encodeURIComponent(keyword)}&page=${page}`,

    // Posts endpoints
    FIND_ALL_POSTS: ({ page, username }: { page: number; username?: string }) =>
        `/posts?page=${page}${username ? `&username=${encodeURIComponent(username)}` : ''}`,
    FIND_POST_BY_ID: ({ id }: { id: number }) => `/posts/${id}`,
    LIKE_POST_BY_ID: ({ id }: { id: number }) => `/posts/${id}/like`,
    UNlIKE_POST_BY_ID: ({ id }: { id: number }) => `/posts/${id}/unlike`,
    FIND_ALL_POSTS_BY_CURRENT_USER: ({ page }: { page: number }) =>
        `/posts/current-user?page=${page}`,
    FIND_ALL_POSTS_ARE_VIDEO: ({ page }: { page: number }) => `/posts/video?page=${page}`,
    CREATE_POST: '/posts/create',
    FIND_ALL_POSTS_FROM_FRIENDS: ({ page }: { page: number }) => `/posts/friends?page=${page}`,

    // Comments endpoints
    FIND_ALL_COMMENTS_BY_POST_ID: ({ postID, page }: { postID: number; page: number }) =>
        `/posts/${postID}/comments?page=${page}`,
    CREATE_COMMENT: (postId: number) => `/posts/${postId}/comments/create`,
};
