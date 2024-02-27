import { useSecureStorage } from '@/lib/hooks';

export default function useAccessToken() {
    const { handleGetValueFromSecureStorage } = useSecureStorage('ACCESS_TOKEN');
    const accessToken = handleGetValueFromSecureStorage();

    return accessToken;
}
