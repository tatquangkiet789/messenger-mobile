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
            console.log(`accessToken in useEffect in useCurrentUser: `, accessToken);
            return;
        }
        if (user) {
            console.log(`user in useEffect in useCurrentUser: `, user);
            return;
        }

        console.log(`Dispatch`);
        const res = dispatch(fetchCurrentUserByAccessTokenThunk());

        return () => res.abort();
    }, [dispatch]);

    return user;
}
