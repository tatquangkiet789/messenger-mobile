import { chats } from '@/data';
import { PageResponse } from '@/features/models';

export async function fetchAllChatUsersService(page: number) {
    try {
        // const res = await AUTH_API.get(ENDPOINTS.FETCH_ALL_CHAT_USERS(page));
        // return res.data as PageResponse
        return new Promise<PageResponse>((res, reject) => {
            setTimeout(() => {
                console.log(`Return chat users after 1s`);
                res({
                    content: chats,
                    statusCode: 200,
                    isLastPage: false,
                });
            }, 1000);
        });
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}
