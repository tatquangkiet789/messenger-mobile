import { View, VirtualizedList } from 'react-native';
import { Chat } from '../entities/chat';
import ChatItem from './ChatItem';

type ChatListProps = {
    chats: Chat[];
};

export default function ChatList({ chats }: ChatListProps) {
    function getItemCount(chats: Chat[]) {
        return chats.length;
    }

    function getItem(data: Chat[], index: number) {
        return data[index];
    }

    return (
        <View>
            {/* {chats.map(({ user, latestMessage }, index) => (
                <ChatItem key={index} user={user} latestMessage={latestMessage} />
            ))} */}
            <VirtualizedList
                data={chats}
                getItem={getItem}
                getItemCount={getItemCount}
                keyExtractor={(item) => item.user.id.toString()}
                renderItem={({ item }) => (
                    <ChatItem user={item.user} latestMessage={item.latestMessage} />
                )}
            />
        </View>
    );
}
