import {
    AddFriendNotificationItem,
    AddFriendNotificationList,
    NotificationSkeleton,
    useFetchAddFriendNotifications,
} from '@/features/notifications';
import { Text, View } from 'react-native';

export default function NotificationScreen() {
    const {
        isLastPage,
        isRefreshing,
        isLoading,
        addFriendNotifications,
        handleChangePage,
        handleRefreshAddFriendNotificationList,
    } = useFetchAddFriendNotifications();

    return (
        <View style={{ flex: 1 }}>
            {isLoading && addFriendNotifications.length === 0 ? (
                <NotificationSkeleton />
            ) : addFriendNotifications.length === 0 ? (
                <Text>Empty</Text>
            ) : (
                <AddFriendNotificationList
                    isLastPage={isLastPage}
                    isRefreshing={isRefreshing}
                    notifications={addFriendNotifications}
                    onChangePage={handleChangePage}
                    onRefresh={handleRefreshAddFriendNotificationList}
                />
            )}
        </View>
    );
}
