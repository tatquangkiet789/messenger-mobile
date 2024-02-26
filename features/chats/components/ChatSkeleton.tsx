import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLORS } from '@/constants';

export default function ChatSkeleton() {
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
        <ScrollView showsVerticalScrollIndicator={false}>
            {Array(10)
                .fill(10)
                .map((_, index) => (
                    <Animated.View
                        key={index}
                        style={[styles.container, { opacity: opacity.current }]}
                    >
                        <View style={styles.avatar}></View>
                        <View style={styles.wrapper}>
                            <View style={styles.name}></View>
                            <View style={styles.message}></View>
                        </View>
                    </Animated.View>
                ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY_006,
        gap: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 999,
        backgroundColor: COLORS.GRAY_006,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        gap: 4,
        height: 64,
    },
    name: {
        height: 18,
        width: '50%',
        backgroundColor: COLORS.GRAY_006,
    },
    message: {
        height: 14,
        width: 'auto',
        backgroundColor: COLORS.GRAY_006,
    },
});
