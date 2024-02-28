import { useSecureStorage } from '@/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { fetchCurrentUserByAccessTokenThunk } from '../services/authThunk';
import useAccessToken from './useAccessToken';

export default function useCurrentUser() {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const accessToken = useAccessToken();

    useEffect(() => {
        if (!accessToken) {
            return;
        }
        if (user) {
            return;
        }

        console.log(`Dispatch`);
        const res = dispatch(fetchCurrentUserByAccessTokenThunk());

        return () => res.abort();
    }, [dispatch]);

    return user;
}
