import { MessageUser } from '@/features/users';

export type Message = {
    id: number;
    content: string;
    messageTypeID: number;
    senderDetail: MessageUser;
    receiverDetail: MessageUser;
    // parentDetail: Message | null;
    parentID: number | null;
};

export type LatestMessage = {
    content: string;
    messageTypeID: number;
};
