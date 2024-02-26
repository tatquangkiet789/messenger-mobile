import { CustomHeaderWrapper } from '@/components';
import { COLORS } from '@/constants';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreenHeader() {
    return (
        <CustomHeaderWrapper>
            <View style={styles.container}>
                <Text style={styles.headerText}>Tài khoản</Text>
            </View>
        </CustomHeaderWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    headerText: {
        fontSize: 16,
        paddingVertical: 3,
        color: COLORS.WHITE,
        fontWeight: '600',
    },
});
