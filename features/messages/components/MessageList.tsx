import {
    ActivityIndicator,
    Button,
    Pressable,
    StyleSheet,
    Text,
    VirtualizedList,
} from 'react-native';

import { COLORS } from '@/constants';
import { useCallback, useEffect, useRef } from 'react';
import { Message } from '../models/message';
import MessageItem from './MessageItem';

type MessageListProps = {
    messages: Message[];
    isLastPage: boolean;
    onChangePage: () => void;
};

export default function MessageList({ messages, isLastPage, onChangePage }: MessageListProps) {
    const latestMessageRef = useRef(null as any);
    const isScroll = true;
    let reverseMessages = [...messages].reverse();

    function getItemCount(messages: Message[]) {
        return messages.length;
    }

    function handleChangePage() {
        setTimeout(() => {
            console.log(`Call onChangePage after 500ms`);
        }, 500);
    }

    function getItem(data: Message[], index: number) {
        return data[index];
    }

    return (
        <VirtualizedList
            data={reverseMessages}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MessageItem message={item} />}
            ListFooterComponent={isLastPage ? null : <ActivityIndicator size={'large'} />}
            ref={latestMessageRef}
            inverted={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        backgroundColor: COLORS.PRIMARY_005,
    },
});
