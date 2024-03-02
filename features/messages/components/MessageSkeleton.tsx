import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants';
import { useSkeletonAnimation } from '@/hooks';

export default function MessageSkeleton() {
    const opacity = useSkeletonAnimation();

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
