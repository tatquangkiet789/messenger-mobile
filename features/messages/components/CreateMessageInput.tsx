import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import useCreateMessage from '../hooks/useCreateMessage';
import { Input } from '@/components/ui';

export default function CreateMessageInput() {
    const { receiver } = useAppSelector((state) => state.chats);
    const [content, setContent] = useState('Red');
    const { handleCreateMessage } = useCreateMessage();

    function handleSubmitCreateMessageForm() {
        handleCreateMessage({ content, receiverID: receiver.id });
    }

    function handleCreateImageTypeMessage() {
        console.log(`Creating image type message`);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleCreateImageTypeMessage}>
                <Icon name={ICONS.IMAGE} color={COLORS.PRIMARY} size={24} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <Input
                    type='text'
                    placeholder={`Gửi tin nhắn tới ${receiver.firstName} ${receiver.lastName}`}
                    value={content}
                    onChangeText={setContent}
                />
            </View>
            <TouchableOpacity
                onPress={handleSubmitCreateMessageForm}
                disabled={content.length === 0}
            >
                <Icon name={ICONS.SEND} color={COLORS.PRIMARY} size={24} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
        backgroundColor: COLORS.WHITE,
    },
    inputContainer: {
        flex: 1,
    },
});
