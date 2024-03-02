import { COLORS } from '@/constants';
import { ActivityIndicator, RefreshControl, StyleSheet, VirtualizedList } from 'react-native';
import { Notification } from '../models/notification';
import AddFriendNotificationItem from './AddFriendNotificationItem';

type AddFriendNotificationItemProps = {
    notifications: Notification[];
    onChangePage: () => void;
    isLastPage: boolean;
    onRefresh: () => void;
    isRefreshing: boolean;
};

export default function AddFriendNotificationList({
    isLastPage,
    isRefreshing,
    onChangePage,
    onRefresh,
    notifications,
}: AddFriendNotificationItemProps) {
    function getItemCount(notifications: Notification[]) {
        return notifications.length;
    }

    function getItem(data: Notification[], index: number) {
        return data[index];
    }

    return (
        <VirtualizedList
            data={notifications}
            getItem={getItem}
            getItemCount={getItemCount}
            // keyExtractor={(item, index) => item.id.toString()}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <AddFriendNotificationItem notification={item} />}
            ListFooterComponent={
                isLastPage ? null : <ActivityIndicator size={'large'} color={COLORS.PRIMARY} />
            }
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    //iOS
                    tintColor={COLORS.PRIMARY}
                    //Android
                    progressBackgroundColor={COLORS.PRIMARY}
                />
            }
            onEndReached={onChangePage}
        />
    );
}

const styles = StyleSheet.create({});
