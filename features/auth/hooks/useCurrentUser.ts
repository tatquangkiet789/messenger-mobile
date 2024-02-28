import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { fetchCurrentUserByAccessTokenThunk } from '../services/authThunk';
import useAccessToken from './useAccessToken';

export default function useCurrentUser() {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const accessToken = useAccessToken();

    useEffect(() => {
        // if (!accessToken) {
        //     return;
        // }
        if (user) {
            return;
        }

        const res = dispatch(fetchCurrentUserByAccessTokenThunk());

        return () => res.abort();
    }, [dispatch, user]);

    return { user, isAuthenticated };
}
