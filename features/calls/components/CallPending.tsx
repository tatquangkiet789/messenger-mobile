import { ANIMATED_IMAGE } from '@/assets/animations';
import { VerifiedIcon } from '@/components/svg';
import { COLORS } from '@/constants';
import { User } from '@/features/users';
import { AnimatedView } from '@/lib/components';
import { StyleSheet, Text, View, Image } from 'react-native';

type CallPendingType = 'call' | 'receive';

type CallPendingProps = {
    user: User;
    type: CallPendingType;
};

export default function CallPending({ user, type }: CallPendingProps) {
    const userFullName = `${user.lastName} ${user.firstName}`;

    return (
        <>
            <View style={styles.avatarContainer}>
                <AnimatedView size={160} imageName={ANIMATED_IMAGE.CALLING_BG} />
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{userFullName}</Text>
                {user.isVerified ? <VerifiedIcon /> : null}
            </View>

            <Text style={styles.connectingText}>
                {type === 'receive' ? 'Cuộc gọi đến' : `Đang kết nối máy đến ${userFullName}`}
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        borderRadius: 999,
        width: 96,
        height: 96,
        position: 'absolute',
        alignSelf: 'center',
        top: '27%',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.WHITE,
    },
    connectingText: {
        fontSize: 14,
        color: COLORS.WHITE,
        fontWeight: '500',
        paddingTop: 8,
        textAlign: 'center',
    },
});
