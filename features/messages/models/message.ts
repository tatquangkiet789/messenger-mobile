import { MessageUser } from '@/features/users';

export type Message = {
    id: number;
    content: string;
    messageTypeID: number;
    senderDetail: MessageUser;
    receiverDetail: MessageUser;
    parentID: number | null;
};

export type LatestMessage = {
    content: string;
    messageTypeID: number;
};

export type CreateMessage = {
    receiverID: number;
    content: string;
};
