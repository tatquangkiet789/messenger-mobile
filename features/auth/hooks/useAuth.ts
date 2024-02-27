import { useAppSelector } from '@/store/hooks/useAppSelector';

export default function useAuth() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return { isAuthenticated };
}
