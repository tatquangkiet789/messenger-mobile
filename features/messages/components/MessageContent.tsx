import { COLORS } from '@/constants';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';
import { MESSAGE_TYPES } from '../constants/constants';

type MessageContentProps = {
    content: string;
    isSentByCurrentUser: boolean;
    senderAvatar: string;
    messageTypeID: number;
};

export default function MessageContent({
    content,
    isSentByCurrentUser,
    messageTypeID,
}: MessageContentProps) {
    return (
        <>
            {messageTypeID === MESSAGE_TYPES.TEXT ? (
                <Text
                    lineBreakMode='clip'
                    style={[styles.content, isSentByCurrentUser && styles.sentByCurrentUser]}
                >
                    {content}
                </Text>
            ) : (
                <Image source={{ uri: content }} style={styles.imageContent} />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: COLORS.GRAY_006,
        padding: 8,
        borderRadius: 8,
        maxWidth: (70 / 100) * Dimensions.get('screen').width,
    },
    sentByCurrentUser: {
        color: COLORS.WHITE,
        backgroundColor: COLORS.PRIMARY,
    },
    imageContent: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
});
