import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLORS } from '@/constants';

export default function UserInfoItemSkeleton() {
    const opacity = useRef(new Animated.Value(0.4));

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.4,
                    useNativeDriver: true,
                    duration: 1000,
                }),
            ]),
        );

        animation.start();

        return () => animation.stop();
    }, [opacity]);
    return (
        <Animated.View style={[styles.userInfoContainer, { opacity: opacity.current }]}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}></View>
            </View>
            <View style={styles.userInfo}>
                <View style={styles.name}></View>
                <View style={styles.userFullName}></View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: COLORS.GRAY_012,
        borderRadius: 12,
    },
    avatarContainer: {
        padding: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 999,
        backgroundColor: COLORS.GRAY_006,
    },
    userInfo: {
        gap: 8,
        flex: 1,
        paddingRight: 16,
    },
    name: {
        height: 16,
        width: '50%',
        backgroundColor: COLORS.GRAY_006,
    },
    userFullName: {
        height: 16,
        width: '70%',
        backgroundColor: COLORS.GRAY_006,
    },
});
