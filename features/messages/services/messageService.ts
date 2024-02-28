import { ENDPOINTS } from '@/constants';
import { createMessage, messages } from '@/data';
import { CommonResponse, PageResponse } from '@/features/models';
import { AUTH_API } from '@/lib/utils';

export async function fetchAllMessagesService({
    receiverID,
    page,
}: {
    receiverID: number;
    page: number;
}) {
    try {
        const res = await AUTH_API.get(ENDPOINTS.FETCH_ALL_MESSAGES({ receiverID, page }));
        return res.data as PageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}

export async function createMessageService(formData: FormData) {
    try {
        // const res = await AUTH_API.post(ENDPOINTS.CREATE_MESSAGE, formData);
        // return res.data;
        return new Promise<CommonResponse>((res, reject) => {
            setTimeout(() => {
                console.log(`Create message after 1s`);
                res({
                    content: createMessage,
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
