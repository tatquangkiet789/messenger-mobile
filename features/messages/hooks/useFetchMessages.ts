import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsNewMessageList } from '@/store/reducers';
import { useEffect, useState } from 'react';
import { fetchAllMessagesThunk } from '../services/messageThunk';

export default function useFetchMessages(receiverID: number) {
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const { messages, isLastPage, isLoading } = useAppSelector((state) => state.messages);

    function handleChangePage() {
        setPage((page) => page + 1);
    }

    useEffect(() => {
        dispatch(toggleIsNewMessageList(page === 1));
        const res = dispatch(fetchAllMessagesThunk({ page, receiverID }));

        return () => res.abort();
    }, [page, receiverID]);

    return { messages, isLastPage, isLoading, handleChangePage };
}
