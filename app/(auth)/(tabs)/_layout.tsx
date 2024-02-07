import { Tabs } from 'expo-router';

import Icon from '@/lib/components/Icon';
import { Icons } from '@/constants';

type TabBarIconProps = {
    name: Icons;
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
        <Tabs screenOptions={{ headerShown: false }}>
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
