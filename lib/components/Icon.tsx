import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type IconProps = {
    name: string;
    color: string;
    size: number;
};

export default function Icon({ name, color, size }: IconProps) {
    const iconName = name as ComponentProps<typeof Ionicons>['name'];

    return <Ionicons name={iconName} size={size} color={color} />;
}
