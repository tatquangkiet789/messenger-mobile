import { useAppSelector } from '@/store/hooks/useAppSelector';

export default function useAuth() {
    const { currentUser, isAuthenticated } = useAppSelector((state) => state.auth);

    return { currentUser, isAuthenticated };
}
