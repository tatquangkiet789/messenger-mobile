import { Button } from '@/components/ui';
import { COLORS, ICONS } from '@/constants';
import { useCurrentUser, useLogout } from '@/features/auth';
import { UserInfoItem, UserInfoItemSkeleton } from '@/features/users';
import { Icon } from '@/lib/components';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    const user = useCurrentUser();
    const router = useRouter();
    const { handleLogout } = useLogout({
        onSuccess: () => {
            router.replace('/(auth)/');
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ rowGap: 16 }} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Text style={styles.userText}>Tài khoản</Text>
                    {user ? <UserInfoItem user={user} /> : <UserInfoItemSkeleton />}
                    <View style={styles.emailContainer}>
                        <Icon name={ICONS.MAIL} color={COLORS.BLACK} size={28} />
                        <Text>publicmail1009@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.logoutButtonContainer}>
                    <Button
                        text='Đăng xuất'
                        variant='outlined'
                        onPress={handleLogout}
                        iconName={ICONS.LOGOUT}
                    />
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
