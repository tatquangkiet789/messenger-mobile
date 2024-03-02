import { addFriendNotifications } from '@/data';
import { PageResponse } from '@/features/models';

export async function fetchAllAddFriendNotificationsService(page: number) {
    try {
        return new Promise<PageResponse>((res, reject) => {
            setTimeout(() => {
                console.log(`Fetch all add friend notifications page: [${page}]`);
                res({
                    isLastPage: false,
                    content: addFriendNotifications,
                    statusCode: 200,
                });
            }, 1000);
        });
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}
