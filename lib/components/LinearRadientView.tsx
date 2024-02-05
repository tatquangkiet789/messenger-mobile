import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type LinearRadientViewProps = {};

export default function LinearRadientView() {
    return (
        <View>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(254, 44, 85)', 'rgba(254, 44, 85, 0.5)']}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
