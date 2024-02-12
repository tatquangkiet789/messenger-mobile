import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';
import { useAppSelector } from '@/store/hooks';

export default function CreateMessageInput() {
    const { receiver } = useAppSelector((state) => state.chats);

    function handleCreateMessage() {
        console.log(`Creating message`);
    }

    function handleCreateImageTypeMessage() {
        console.log(`Creating image type message`);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleCreateImageTypeMessage}>
                <Icon name={ICONS.IMAGE} color={COLORS.PRIMARY} size={24} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={`Gửi tin nhắn tới ${receiver.firstName} ${receiver.lastName}`}
            />
            <TouchableOpacity onPress={handleCreateMessage}>
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
    input: {
        padding: 8,
        flex: 1,
        fontSize: 16,
        backgroundColor: COLORS.GRAY_006,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.GRAY_012,
        borderRadius: 999,
    },
});
