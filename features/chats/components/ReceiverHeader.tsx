import { ICONS, COLORS } from '@/constants';
import { Icon } from '@/lib/components';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'expo-router';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';

export default function ReceiverHeader() {
    const { receiver } = useAppSelector((state) => state.chats);
    const router = useRouter();

    function handleNavigateBack() {
        router.back();
    }

    function handleCallUser() {
        router.navigate({
            pathname: '/calls/[receiverID]',
            params: {
                receiverID: receiver.id.toString(),
            },
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <StatusBar barStyle={'dark-content'} />
                <Pressable onPress={handleNavigateBack}>
                    <Icon name={ICONS.BACK} color={COLORS.BLACK} size={28} />
                </Pressable>
                <View style={styles.receiverContainer}>
                    <Image style={styles.avatar} source={{ uri: receiver.avatar }} />
                    <Text style={styles.name}>
                        {receiver.lastName} {receiver.firstName}
                    </Text>
                </View>
                <TouchableOpacity onPress={handleCallUser}>
                    <Icon name={ICONS.VIDEOCAM} color={COLORS.PRIMARY} size={28} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.WHITE,
    },
    wrapper: {
        padding: 16,
        // flexDirection: 'row',
        alignItems: 'center',
    },
    receiverContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 999,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
    },
});
