import { ENDPOINTS } from '@/constants/endpoints';
import { searchResults } from '@/data';
import { PageResponse } from '@/features/models';
import { PUBLIC_API } from '@/lib/utils/axios';

export async function fetchAllUsersByKeywordService({
    keyword,
    page,
}: {
    keyword: string;
    page: number;
}) {
    try {
        console.log(`Fetch all users by: [${keyword}] - page: [${page}]`);
        // const res = await PUBLIC_API.get(ENDPOINTS.FETCH_ALL_USERS_BY_KEYWORD({ keyword, page }));
        // return res.data as PageResponse;
        return new Promise<PageResponse>((res, reject) => {
            setTimeout(() => {
                console.log(`Return search results after 1s`);
                res({
                    content: searchResults,
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
