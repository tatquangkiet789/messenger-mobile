import { ENDPOINTS } from '@/constants';
import { PageResponse } from '@/features/models';
import { AUTH_API } from '@/lib/utils';

export async function fetchAllChatUsersService(page: number) {
    try {
        const res = await AUTH_API.get(ENDPOINTS.FETCH_ALL_CHAT_USERS(page));
        return res.data as PageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}
