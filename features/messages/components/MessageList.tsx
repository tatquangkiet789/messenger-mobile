import { StyleSheet, VirtualizedList } from 'react-native';

import { Message } from '../models/message';
import MessageItem from './MessageItem';

type MessageListProps = {
    messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
    function getItemCount(messages: Message[]) {
        return messages.length;
    }

    function getItem(data: Message[], index: number) {
        return data[index];
    }

    return (
        <VirtualizedList
            data={messages}
            style={{
                paddingHorizontal: 8,
            }}
            showsVerticalScrollIndicator={false}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MessageItem message={item} />}
        />
    );
}

const styles = StyleSheet.create({});
