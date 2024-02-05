import { LatestMessage } from '@/features/messages';
import { User } from '@/features/users';

export type Chat = {
    user: User;
    latestMessage: LatestMessage;
};
