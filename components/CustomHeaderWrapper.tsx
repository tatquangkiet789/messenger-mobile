import { ReactNode } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { LinearRadientView } from '@/lib/components';

type CustomHeaderWrapperProps = {
    children: ReactNode;
};

export default function CustomHeaderWrapper({ children }: CustomHeaderWrapperProps) {
    return (
        <LinearRadientView startColor={COLORS.PRIMARY} endColor={COLORS.PRIMARY_05}>
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </LinearRadientView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
