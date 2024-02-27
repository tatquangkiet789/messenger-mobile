import { ANIMATED_IMAGE } from '@/assets/animations';
import { VerifiedIcon } from '@/components/svg';
import { COLORS } from '@/constants';
import { CallPending, EndCall } from '@/features/calls';
import { AnimatedView, LinearRadientView } from '@/lib/components';
import { useAppSelector } from '@/store/hooks';
import { useLocalSearchParams } from 'expo-router';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function CallPage() {
    const { receiverID } = useLocalSearchParams<{ receiverID: string }>();
    const { receiver } = useAppSelector((state) => state.chats);
    const receiverName = `${receiver.lastName} ${receiver.firstName}`;

    function handleEndCall() {
        console.log(`End call`);
    }

    return (
        <LinearRadientView startColor={COLORS.PRIMARY} endColor={COLORS.PRIMARY_05}>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'} />
                <View style={styles.wrapper}>
                    <CallPending user={receiver} type='receive' />
                </View>
                <View style={styles.actionContainer}>
                    <EndCall onPress={handleEndCall} />
                </View>
            </SafeAreaView>
        </LinearRadientView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 36,
    },
    wrapper: {
        flex: 1,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
