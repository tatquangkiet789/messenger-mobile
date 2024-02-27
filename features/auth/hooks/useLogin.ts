import { useCallback } from 'react';

import { useSecureStorage } from '@/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LoginForm, LoginResponse } from '../models/login';
import { loginThunk } from '../services/authThunk';

type LoginParamList = {
    onSuccess: () => void;
};

export default function useLogin({ onSuccess }: LoginParamList) {
    // const [isLoading, setIsLoading] = useState(false);
    const { isLoading } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const { handleSetValueToSecureStorage } = useSecureStorage('ACCESS_TOKEN');

    const handleLogin = useCallback(async (data: LoginForm) => {
        dispatch(loginThunk(data))
            .unwrap()
            .then((res: LoginResponse) => {
                console.log(`About to set value to secure storage`);
                handleSetValueToSecureStorage(res.accessToken).then(() => {
                    onSuccess();
                });
            });
    }, []);

    return { isLoading, handleLogin };
}
