import { COLORS } from '@/constants';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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
                <View
                    style={[
                        styles.contentWrapper,
                        ,
                        isSentByCurrentUser && { backgroundColor: COLORS.PRIMARY },
                    ]}
                >
                    <Text
                        lineBreakMode='clip'
                        style={[styles.contentText, isSentByCurrentUser && { color: COLORS.WHITE }]}
                    >
                        {content}
                    </Text>
                </View>
            ) : (
                <Image source={{ uri: content }} style={styles.imageContent} />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: COLORS.GRAY_006,
        padding: 8,
        borderRadius: 8,
        maxWidth: (70 / 100) * Dimensions.get('screen').width,
    },

    contentText: {
        fontSize: 16,
    },
    imageContent: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
});
