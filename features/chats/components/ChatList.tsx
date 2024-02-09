import { VirtualizedList } from 'react-native';
import { Chat } from '../entities/chat';
import ChatItem from './ChatItem';

type ChatListProps = {
    chats: Chat[];
    onChangePage: (page: number) => void;
};

export default function ChatList({ chats }: ChatListProps) {
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
        />
    );
}
