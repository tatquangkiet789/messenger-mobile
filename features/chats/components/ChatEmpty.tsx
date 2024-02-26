import { ANIMATED_IMAGE } from '@/assets/animations';
import { Button } from '@/components/ui';
import { ICONS } from '@/constants';
import { AnimatedView } from '@/lib/components';
import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function ChatEmpty() {
    const height = Dimensions.get('window').height;
    const router = useRouter();

    function handleNavigateToSearchScreen() {
        router.push('/(app)/search');
    }

    return (
        <View style={styles.container}>
            <AnimatedView imageName={ANIMATED_IMAGE.CHAT} size={height / 3} />
            <Text style={styles.noMessagesText}>Không tìm thấy tin nhắn</Text>
            <Text style={styles.startAConversation}>Hãy kết bạn và bắt đầu cuộc trò chuyện</Text>
            <Button
                text='Kết bạn'
                variant='primary'
                onPress={handleNavigateToSearchScreen}
                iconName={ICONS.ADD}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    noMessagesText: {
        fontSize: 24,
        fontWeight: '600',
    },
    startAConversation: {
        marginVertical: 16,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '400',
    },
});
