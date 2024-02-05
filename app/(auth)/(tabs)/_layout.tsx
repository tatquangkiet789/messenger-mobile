import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import Icon from '@/lib/components/Icon';
import { ICON_NAMES, IconName } from '@/constants/icons';

type TabBarIconProps = {
    name: IconName;
    color: string;
    focused: boolean;
    size: number;
};

// function TabBarIcon({ name, color, focused, size, routeName }: TabBarIconProps) {
//     const test = routes[routeName];
//     return <Icon name={name} size={size} color={color} />;
// }
function TabBarIcon({ name, color, focused, size }: TabBarIconProps) {
    return <Icon name={name} color={color} size={size} />;
}

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Tab One',
                    tabBarIcon: ({ color, focused, size }) =>
                        TabBarIcon({ color, focused, name: 'home', size }),
                }}
            />
            <Tabs.Screen
                name='two'
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color, focused, size }) =>
                        TabBarIcon({ color, focused, name: 'videocam', size }),
                }}
            />
        </Tabs>
    );
}
