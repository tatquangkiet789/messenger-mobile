import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { LinearRadientView } from '@/lib/components';

type CustomHeaderWrapperProps = PropsWithChildren;

export default function CustomHeaderWrapper({ children }: CustomHeaderWrapperProps) {
    return (
        // <LinearRadientView startColor={COLORS.PRIMARY} endColor={COLORS.PRIMARY}>
        //     <StatusBar barStyle={'light-content'} />
        //     <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        // </LinearRadientView>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.PRIMARY,
    },
});
