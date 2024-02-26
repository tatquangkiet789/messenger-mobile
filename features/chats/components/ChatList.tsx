import { ActivityIndicator, RefreshControl, VirtualizedList } from 'react-native';
import { Chat } from '../models/chat';
import ChatItem from './ChatItem';
import { COLORS } from '@/constants';

type ChatListProps = {
    chats: Chat[];
    onChangePage: () => void;
    isLastPage: boolean;
    onRefresh: () => void;
    isRefreshing: boolean;
};

export default function ChatList({ chats, isLastPage, onRefresh, isRefreshing }: ChatListProps) {
    function getItemCount(chats: Chat[]) {
        return chats.length;
    }

    function getItem(data: Chat[], index: number) {
        return data[index];
    }

    return (
        <VirtualizedList
            data={chats}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item) => item.user.id.toString()}
            renderItem={({ item }) => (
                <ChatItem user={item.user} latestMessage={item.latestMessage} />
            )}
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
        />
    );
}
