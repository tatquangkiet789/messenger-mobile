export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    avatar: string;
    isVerified: boolean;
    userRoleName: string;
};

export type SearchUser = {
    user: User;
    isSentAddFriendNotification: boolean;
};
