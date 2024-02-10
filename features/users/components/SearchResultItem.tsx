import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';

import { COLORS } from '@/constants';
import { SearchUser, User } from '../models/user';

type SearchResultItemProps = {
    user: User;
    isSentAddFriendNotification: boolean;
};

export default function SearchResultItem({
    user,
    isSentAddFriendNotification,
}: SearchResultItemProps) {
    return (
        <View style={styles.container}>
            <>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={styles.wrapper}>
                    <Text style={styles.name}>
                        {user.lastName} {user.firstName}
                    </Text>
                    <Text style={styles.username}>{user.username}</Text>
                </View>
            </>
        </View>
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
    username: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.GRAY_05,
    },
});
