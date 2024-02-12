import { Tabs } from 'expo-router';

import { COLORS, SCREEN_TAB_BAR_ICONS, ScreenTabBarIcon } from '@/constants';
import Icon from '@/lib/components/Icon';
import { ChatScreenHeader } from '@/features/chats';

type TabBarIconProps = {
    name: ScreenTabBarIcon;
    color: string;
    focused: boolean;
    size: number;
};

function TabBarIcon({ name, color, focused, size }: TabBarIconProps) {
    const icon = SCREEN_TAB_BAR_ICONS[name][focused ? 'active' : 'inactive'];

    return <Icon name={icon} size={size} color={color} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.PRIMARY,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    header: () => <ChatScreenHeader />,
                    title: 'Trang chủ',
                    tabBarIcon: ({ color, focused, size }) =>
                        TabBarIcon({ color, focused, name: 'home', size }),
                }}
            />
            <Tabs.Screen
                name='notification'
                options={{
                    title: 'Thông báo',
                    tabBarIcon: ({ color, focused, size }) =>
                        TabBarIcon({ color, focused, name: 'notification', size }),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Cá nhân',
                    tabBarIcon: ({ color, focused, size }) =>
                        TabBarIcon({ color, focused, name: 'profile', size }),
                }}
            />
        </Tabs>
    );
}
