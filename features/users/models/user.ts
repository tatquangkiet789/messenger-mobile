export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    avatar: string;
    isVerified: boolean;
    userRoleName: string;
};

export type MessageUser = {
    id: number;
    avatar: string;
};

export type SearchUser = {
    user: User;
    isSentAddFriendNotification: boolean;
};
