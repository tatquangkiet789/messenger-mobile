import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageScreen() {
    const { receiverID } = useLocalSearchParams<{ receiverID: string }>();

    return (
        <View style={styles.container}>
            <Text>ReceiverID: {receiverID}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
