import { useLocalSearchParams } from 'expo-router';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {
    CreateMessageInput,
    MessageList,
    MessageSkeleton,
    useFetchMessages,
} from '@/features/messages';
import { KeyboardAvoidingViewWrapper } from '@/components';

export default function MessageScreen() {
    const { receiverID } = useLocalSearchParams<{ receiverID: string }>();
    const { messages, isLastPage, handleChangePage, isLoading } = useFetchMessages(
        parseInt(receiverID),
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <KeyboardAvoidingViewWrapper>
                    <>
                        {isLoading && messages.length === 0 ? (
                            <MessageSkeleton />
                        ) : messages.length === 0 ? (
                            <Text>Hãy bắt đầu cuộc trò chuyện</Text>
                        ) : (
                            <MessageList
                                messages={messages}
                                isLastPage={isLastPage}
                                onChangePage={handleChangePage}
                            />
                        )}
                        <CreateMessageInput />
                    </>
                </KeyboardAvoidingViewWrapper>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wrapper: {
        flex: 1,
    },
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
