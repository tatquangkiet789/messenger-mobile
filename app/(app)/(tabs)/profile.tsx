import { Button } from '@/components/ui';
import { COLORS, ICONS } from '@/constants';
import { useCurrentUser } from '@/features/auth';
import { Icon } from '@/lib/components';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    const { user } = useCurrentUser();

    function handleLogout() {
        console.log(`Log out user`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ rowGap: 16 }} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Text style={styles.userText}>Tài khoản</Text>
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
                    <View style={styles.emailContainer}>
                        <Icon name={ICONS.MAIL} color={COLORS.BLACK} size={28} />
                        <Text>publicmail1009@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.logoutButtonContainer}>
                    <Button text='Đăng xuất' variant='outlined' onPress={handleLogout} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        gap: 16,
        backgroundColor: COLORS.WHITE,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    userText: {
        fontSize: 14,
        color: COLORS.PRIMARY,
        paddingBottom: 8,
    },
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
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 16,
        paddingVertical: 16,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GRAY_012,
    },
    emailText: {
        fontSize: 16,
    },
    logoutButtonContainer: {
        paddingHorizontal: 16,
    },
});
