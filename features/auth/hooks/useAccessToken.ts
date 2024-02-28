import { useSecureStorage } from '@/lib/hooks';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';

export default function useAccessToken() {
    const { handleGetValueFromSecureStorage } = useSecureStorage('ACCESS_TOKEN');
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        handleGetValueFromSecureStorage().then((data: any) => {
            setAccessToken(data);
        });
    }, [isAuthenticated]);

    return accessToken;
}
