import { COLORS } from '@/constants';
import { Stack } from 'expo-router';

export default function PublicLayout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: 'Đăng nhập',
                    headerStyle: {
                        backgroundColor: COLORS.PRIMARY,
                    },
                    headerTitleStyle: {
                        color: COLORS.WHITE,
                    },
                }}
            />
            <Stack.Screen
                name='register'
                options={{
                    headerTitle: 'Đăng ký',
                    headerStyle: {
                        backgroundColor: COLORS.PRIMARY,
                    },
                    headerTitleStyle: {
                        color: COLORS.WHITE,
                    },
                    headerBackTitleVisible: false,
                    headerTintColor: COLORS.WHITE,
                }}
            />
        </Stack>
    );
}
