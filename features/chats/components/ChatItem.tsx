import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { LatestMessage } from '@/features/messages';
import { User } from '@/features/users';

type ChatItemProps = {
    user: User;
    latestMessage: LatestMessage;
};

export default function ChatItem({ user, latestMessage }: ChatItemProps) {
    function hanleNavigateToMessageScreen() {
        // navigation.navigate('MessageScreen', {
        //     receiverID: user.id,
        // });
    }

    return (
        <TouchableHighlight
            style={styles.container}
            onPress={hanleNavigateToMessageScreen}
            underlayColor={COLORS.GRAY_006}
        >
            <>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={styles.wrapper}>
                    <Text style={styles.name}>
                        {user.lastName} {user.firstName}
                    </Text>
                    <Text style={styles.message}>{latestMessage.content}</Text>
                </View>
            </>
        </TouchableHighlight>
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
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        gap: 4,
        height: 64,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    message: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.GRAY_05,
    },
});
