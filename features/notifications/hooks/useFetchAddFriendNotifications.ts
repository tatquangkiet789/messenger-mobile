import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsNewAddFriendNotificationList } from '@/store/reducers';
import { useCallback, useEffect, useState } from 'react';
import { fetchAllAddFriendNotificationsThunk } from '../services/notificationThunk';

export default function useFetchAddFriendNotifications() {
    const [page, setPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const dispatch = useAppDispatch();
    const { error, isLastPage, isLoading, addFriendNotifications } = useAppSelector(
        (state) => state.notifications,
    );

    const handleChangePage = useCallback(() => {
        setPage((prev) => prev + 1);
    }, []);

    const handleRefreshAddFriendNotificationList = useCallback(() => {
        try {
            console.log(`Handle refresh add friend notification list`);
            setPage(1);
            setIsRefreshing(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    useEffect(() => {
        dispatch(toggleIsNewAddFriendNotificationList(page === 1));
        const res = dispatch(fetchAllAddFriendNotificationsThunk(page));

        return () => res.abort();
    }, [dispatch, page]);

    return {
        isLastPage,
        isLoading,
        error,
        addFriendNotifications,
        handleChangePage,
        handleRefreshAddFriendNotificationList,
        isRefreshing,
    };
}
