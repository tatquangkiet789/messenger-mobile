import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type EndCallProps = {
    onPress: () => void;
};

export default function EndCall({ onPress }: EndCallProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon name={ICONS.CALL} size={40} color={COLORS.WHITE} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        backgroundColor: 'red',
        width: 72,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
