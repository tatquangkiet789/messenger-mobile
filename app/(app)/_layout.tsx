import { Redirect, Stack } from 'expo-router';

import { SearchScreenHeader } from '@/components';
import { ReceiverHeader } from '@/features/chats';
import { useAppSelector } from '@/store/hooks';
import { NotificationProvider } from '@/providers';

export default function AuthLayout() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (!isAuthenticated) return <Redirect href='/(auth)/' />;

    return (
        <NotificationProvider>
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen
                    name='messages/[receiverID]'
                    options={{ header: () => <ReceiverHeader /> }}
                />
                <Stack.Screen
                    name='search'
                    options={{
                        header: () => <SearchScreenHeader />,
                    }}
                />
            </Stack>
        </NotificationProvider>
    );
}
