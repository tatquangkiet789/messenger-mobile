import { useAppDispatch } from '@/store/hooks';
import { useCallback } from 'react';
import { logoutThunk } from '../services/authThunk';
import { useSecureStorage } from '@/lib/hooks';

type LogoutParamList = {
    onSuccess: () => void;
};

export default function useLogout({ onSuccess }: LogoutParamList) {
    const dispatch = useAppDispatch();
    const { handleRemoveValueFromSecureStorage } = useSecureStorage('ACCESS_TOKEN');

    const handleLogout = useCallback(() => {
        dispatch(logoutThunk())
            .unwrap()
            .then(() => {
                handleRemoveValueFromSecureStorage().then(() => onSuccess());
            });
    }, []);

    return { handleLogout };
}
