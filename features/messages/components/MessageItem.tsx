import { StyleSheet, Text, View, Image } from 'react-native';

import { Message } from '../models/message';
import { MESSAGE_TYPES } from '../constants/constants';
import { useAppSelector } from '@/store/hooks';
import MessageContent from './MessageContent';

type MessageItemProps = {
    message: Message;
};

export default function MessageItem({ message }: MessageItemProps) {
    const { user } = useAppSelector((state) => state.auth);
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
