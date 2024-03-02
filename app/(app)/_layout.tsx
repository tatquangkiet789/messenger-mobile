import { Redirect, Stack, useRouter } from 'expo-router';

import { SearchScreenHeader } from '@/components';
import { ReceiverHeader } from '@/features/chats';
import { AppProviderWrapper } from '@/providers';
import { useAppSelector } from '@/store/hooks';
import { useSecureStorage } from '@/lib/hooks';
import { useAccessToken, useCurrentUser } from '@/features/auth';
import { useEffect, useState } from 'react';

export default function AuthLayout() {
    // const accessToken = useAccessToken();
    const { handleGetValueFromSecureStorage } = useSecureStorage('ACCESS_TOKEN');
    // const [accessToken, setAccessToken] = useState(() => {
    //     handleGetValueFromSecureStorage().then((data) => {
    //         return data;
    //     });
    //     return '';
    // });
    // const { isAuthenticated } = useAppSelector((state) => state.auth);
    const { isAuthenticated } = useCurrentUser();

    const router = useRouter();

    // useEffect(() => {
    //     async function test() {
    //         const accessToken = await handleGetValueFromSecureStorage();
    //         if (!accessToken) return router.replace('/(auth)/');
    //     }

    //     test();
    // }, []);
    // const accessToken = useAccessToken();

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
