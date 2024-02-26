import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsNewSearchList } from '@/store/reducers';
import { useCallback, useEffect, useState } from 'react';
import { fetchAllUsersByKeywordThunk } from '../services/userThunk';

export default function useSearchUsers() {
    const dispatch = useAppDispatch();
    const { isLastPage, isLoading, searchKeyword, searchResult } = useAppSelector(
        (state) => state.users,
    );

    const [page, setPage] = useState(1);

    const handleChangeSearchUsersPage = useCallback(() => {
        setPage((prev) => prev + 1);
    }, []);

    useEffect(() => {
        if (searchKeyword === '') return;

        dispatch(toggleIsNewSearchList(page === 1));
        const res = dispatch(fetchAllUsersByKeywordThunk({ keyword: searchKeyword, page }));

        return () => res.abort();
    }, [page, searchKeyword]);

    return { users: searchResult, isLastPage, isLoading, handleChangeSearchUsersPage };
}
