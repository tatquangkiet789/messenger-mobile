import { Stack } from 'expo-router';

export default function PublicLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle: 'Đăng ký' }} />
        </Stack>
    );
}
