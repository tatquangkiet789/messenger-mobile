import { SafeAreaView, StyleSheet } from 'react-native';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { ChatEmpty, ChatList, ChatSkeleton, useFetchChats } from '@/features/chats';

export default function TabOneScreen() {
    const { chats, handleChangePage, isLastPage, isLoading, handleRefreshChatList, isRefreshing } =
        useFetchChats();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                {isLoading && chats.length === 0 ? (
                    <ChatSkeleton />
                ) : chats.length === 0 ? (
                    <ChatEmpty />
                ) : (
                    <ChatList
                        chats={chats}
                        onChangePage={handleChangePage}
                        isLastPage={isLastPage}
                        onRefresh={handleRefreshChatList}
                        isRefreshing={isRefreshing}
                    />
                )}
            </KeyboardAvoidingViewWrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
