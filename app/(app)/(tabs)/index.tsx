import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Suspense, useEffect, useState } from 'react';
import { ChatList } from '@/features/chats';
import { toggleIsNewList } from '@/store/reducers';
import { fetchAllChatUsersThunk } from '@/features/chats/services/chatThunk';

export default function TabOneScreen() {
    const { chats, searchChatUsersKeyword } = useAppSelector((state) => state.chats);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const filteredChats = [...chats].filter(
        (chat) =>
            chat.user.lastName.toLowerCase().includes(searchChatUsersKeyword) ||
            chat.user.firstName.toLowerCase().includes(searchChatUsersKeyword),
    );

    useEffect(() => {
        console.log(`Chat Screen`);
        dispatch(toggleIsNewList(page === 1));
        const res = dispatch(fetchAllChatUsersThunk(page));

        return () => res.abort();
    }, [page]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                <Suspense fallback={<ActivityIndicator size={'large'} />}>
                    <ChatList chats={filteredChats} onChangePage={setPage} />
                </Suspense>
            </KeyboardAvoidingViewWrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
