import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';

type LinearRadientViewProps = {
    children: ReactNode;
    startColor: string;
    endColor: string;
};

export default function LinearRadientView({
    children,
    startColor,
    endColor,
}: LinearRadientViewProps) {
    return (
        <LinearGradient style={{ flex: 1 }} colors={[startColor, endColor]}>
            {children}
        </LinearGradient>
    );
}
