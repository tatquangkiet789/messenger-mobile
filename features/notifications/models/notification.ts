import { User } from '@/features/users';

export type Notification = {
    id: number;
    content: string;
    notificationSenderDetail: User;
    notificationReceiverDetail: User;
    notificationTypeID: number;
};
