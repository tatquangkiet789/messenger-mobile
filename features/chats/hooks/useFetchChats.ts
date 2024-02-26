import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { toggleIsNewChatList } from '@/store/reducers';
import { useState, useEffect, useCallback } from 'react';
import { fetchAllChatUsersThunk } from '../services/chatThunk';

export default function useFetchChats() {
    const { chats, searchChatUsersKeyword, isLastPage, isLoading } = useAppSelector(
        (state) => state.chats,
    );
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const filteredChats = [...chats].filter(
        (chat) =>
            chat.user.lastName.toLowerCase().includes(searchChatUsersKeyword) ||
            chat.user.firstName.toLowerCase().includes(searchChatUsersKeyword),
    );

    const handleChangePage = useCallback(() => {
        setPage((page) => page + 1);
    }, []);

    const handleRefreshChatList = useCallback(() => {
        try {
            console.log(`Handle refresh chat list`);
            setPage(1);
            setIsRefreshing(true);
            dispatch(toggleIsNewChatList(true));
            dispatch(fetchAllChatUsersThunk(1));
        } catch (error) {
            console.error(error);
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    useEffect(() => {
        dispatch(toggleIsNewChatList(page === 1));
        const res = dispatch(fetchAllChatUsersThunk(page));

        return () => res.abort();
    }, [page]);

    return {
        chats: filteredChats,
        handleChangePage,
        isLastPage,
        isLoading,
        handleRefreshChatList,
        isRefreshing,
    };
}
