import { User } from '@/features/users';

export type Message = {
    id: number;
    content: string;
    messageTypeID: number;
    senderDetail: User;
    receiverDetail: User;
    parentDetail: Message | undefined;
};

export type LatestMessage = {
    content: string;
    messageTypeID: number;
};
