import { useSecureStorage } from '@/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { fetchCurrentUserByAccessTokenThunk } from '../services/authThunk';

export default function useCurrentUser() {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const { value: accessToken } = useSecureStorage('ACCESS_TOKEN');

    useEffect(() => {
        if (!accessToken) return;
        if (user) return;

        const res = dispatch(fetchCurrentUserByAccessTokenThunk());

        return () => res.abort();
    }, [dispatch, accessToken, user]);

    return { user };
}
