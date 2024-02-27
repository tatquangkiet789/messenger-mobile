import { Redirect, Stack } from 'expo-router';

import { SearchScreenHeader } from '@/components';
import { ReceiverHeader } from '@/features/chats';
import { AppProviderWrapper } from '@/providers';
import { useAppSelector } from '@/store/hooks';
import { useSecureStorage } from '@/lib/hooks';
import { useAccessToken } from '@/features/auth';

export default function AuthLayout() {
    // const { isAuthenticated } = useAppSelector((state) => state.auth);
    const accessToken = useAccessToken();

    if (!accessToken) return <Redirect href='/(auth)/' />;

    return (
        <AppProviderWrapper>
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen
                    name='messages/[receiverID]'
                    options={{ header: () => <ReceiverHeader /> }}
                />
                <Stack.Screen
                    name='calls/[receiverID]'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='search'
                    options={{
                        header: () => <SearchScreenHeader />,
                    }}
                />
            </Stack>
        </AppProviderWrapper>
    );
}
