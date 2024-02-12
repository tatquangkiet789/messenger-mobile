import { useLocalSearchParams } from 'expo-router';
import { Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsNewMessageList } from '@/store/reducers';
import {
    CreateMessageInput,
    MessageItem,
    MessageList,
    fetchAllMessagesThunk,
} from '@/features/messages';
import { Icon } from '@/lib/components';
import { COLORS, ICONS } from '@/constants';

export default function MessageScreen() {
    const { receiverID } = useLocalSearchParams<{ receiverID: string }>();
    const [page, setPage] = useState(1);
    const { messages } = useAppSelector((state) => state.messages);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleIsNewMessageList(page === 1));
        const res = dispatch(fetchAllMessagesThunk({ receiverID: parseInt(receiverID), page }));

        return () => res.abort();
    }, [receiverID, page]);

    return (
        <View style={styles.container}>
            <Suspense fallback={<ActivityIndicator size={'large'} />}>
                <MessageList messages={messages} />
            </Suspense>
            <CreateMessageInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
