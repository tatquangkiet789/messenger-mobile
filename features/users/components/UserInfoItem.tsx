import { COLORS } from '@/constants';
import { Image, StyleSheet, Text, View } from 'react-native';
import { User } from '../models/user';

type UserInfoItemProps = {
    user: User;
};

export default function UserInfoItem({ user }: UserInfoItemProps) {
    return (
        <View style={styles.userInfoContainer}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.name}>Thông tin cá nhân</Text>
                <Text style={styles.userFullName}>
                    {user.lastName} {user.firstName}
                </Text>
            </View>
        </View>
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
    },
    userInfo: {
        gap: 8,
    },
    name: {
        fontWeight: '400',
        color: COLORS.GRAY_05,
    },
    userFullName: {
        fontWeight: '700',
        fontSize: 16,
    },
});
