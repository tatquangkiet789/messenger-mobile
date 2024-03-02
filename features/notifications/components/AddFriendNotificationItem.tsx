import { COLORS } from '@/constants';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Notification } from '../models/notification';
import { Button } from '@/components/ui';

type AddFriendNotificationItemProps = {
    notification: Notification;
};

export default function AddFriendNotificationItem({
    notification,
}: AddFriendNotificationItemProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: notification.notificationSenderDetail.avatar }}
            />
            <View style={styles.wrapper}>
                <View style={styles.contentContainer}>
                    <Text style={styles.senderName}>
                        {notification.notificationSenderDetail.lastName}{' '}
                        {notification.notificationSenderDetail.firstName}
                    </Text>
                    <Text>{notification.content}</Text>
                </View>
                <View style={styles.actionButtonsContainer}>
                    <Button text='Chấp nhận' variant='primary' onPress={() => {}} size='sm' />
                    <Button text='Từ chối' variant='outlined' onPress={() => {}} size='sm' />
                </View>
            </View>
        </View>
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
    },
    wrapper: {
        gap: 8,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    senderName: {
        fontSize: 16,
        fontWeight: '600',
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
});
