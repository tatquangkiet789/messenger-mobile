import { COLORS } from '@/constants';
import { useSkeletonAnimation } from '@/hooks';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function NotificationSkeleton() {
    const opacity = useSkeletonAnimation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {Array(10)
                .fill(10)
                .map((_, index) => (
                    <Animated.View
                        style={[styles.container, { opacity: opacity.current }]}
                        key={index}
                    >
                        <View style={styles.avatar}></View>
                        <View style={styles.wrapper}>
                            <View style={styles.contentContainer}></View>
                            <View style={styles.actionButtonsContainer}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonContent}>Chấp nhận</Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonContent}>Từ chối</Text>
                                </View>
                            </View>
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
        padding: 16,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLORS.GRAY_006,
        gap: 16,
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 999,
        backgroundColor: COLORS.GRAY_006,
    },
    wrapper: {
        gap: 8,
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        height: 24,
        backgroundColor: COLORS.GRAY_006,
        width: '100%',
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    buttonContainer: {
        backgroundColor: COLORS.GRAY_006,
        padding: 8,
        borderRadius: 8,
    },
    buttonContent: {
        fontSize: 16,
        color: 'transparent',
    },
});
