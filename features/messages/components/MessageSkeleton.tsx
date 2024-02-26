import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { COLORS } from '@/constants';

export default function MessageSkeleton() {
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
            <Animated.View style={[styles.container, { opacity: opacity.current }]}>
                {Array(10)
                    .fill(10)
                    .map((_, index) => (
                        <View
                            key={index}
                            style={[styles.wrapper, index % 4 === 0 && styles.isSentByCurrentUser]}
                        >
                            <View style={[styles.avatar]}></View>
                            <View style={styles.content}></View>
                        </View>
                    ))}
            </Animated.View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    wrapper: {
        flexDirection: 'row',
        gap: 8,
        padding: 8,
    },
    isSentByCurrentUser: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    avatar: {
        width: 48,
        height: 48,
        backgroundColor: COLORS.GRAY_006,
        borderRadius: 999,
    },
    content: {
        backgroundColor: COLORS.GRAY_006,
        borderRadius: 8,
        height: 48,
        width: (70 / 100) * Dimensions.get('screen').width,
    },
});
