import { Redirect, Stack } from 'expo-router';

import { useAppSelector } from '@/store/hooks';

export default function AuthLayout() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (!isAuthenticated) return <Redirect href='/(auth)/' />;

    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='messages/[receiverID]' />
        </Stack>
    );
}
