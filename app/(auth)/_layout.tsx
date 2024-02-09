import { Stack } from 'expo-router';

export default function PublicLayout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name='index' options={{ headerTitle: 'Đăng nhập' }} />
            <Stack.Screen name='register' options={{ headerTitle: 'Đăng ký' }} />
        </Stack>
    );
}
