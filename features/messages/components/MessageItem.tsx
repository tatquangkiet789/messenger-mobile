import { Image, StyleSheet, View } from 'react-native';

import { useAppSelector } from '@/store/hooks';
import { Message } from '../models/message';
import MessageContent from './MessageContent';
import { useCurrentUser } from '@/features/auth';

type MessageItemProps = {
    message: Message;
};

export default function MessageItem({ message }: MessageItemProps) {
    const user = useCurrentUser();
    const { id, messageTypeID, content, receiverDetail, senderDetail } = message;
    const isSentByCurrentUser = user.id === senderDetail.id;

    return (
        <View style={[styles.container, isSentByCurrentUser && styles.isSentByCurrentUser]}>
            {isSentByCurrentUser ? (
                <Image source={{ uri: senderDetail.avatar }} style={styles.avatar} />
            ) : null}
            <MessageContent
                content={content}
                isSentByCurrentUser={isSentByCurrentUser}
                messageTypeID={messageTypeID}
                senderAvatar={senderDetail.avatar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        padding: 8,
    },
    isSentByCurrentUser: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 999,
    },
});
