import { ENDPOINTS } from '@/constants/endpoints';
import { PageResponse } from '@/models/response';
import { PUBLIC_API } from '@/lib/utils/axios';

export async function fetchUsersByKeywordService({ keyword }: { keyword: string }) {
    try {
        const res = await PUBLIC_API.get(ENDPOINTS.FIND_ALL_USERS_BY_KEYWORD({ keyword, page: 1 }));
        return res.data as PageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}
