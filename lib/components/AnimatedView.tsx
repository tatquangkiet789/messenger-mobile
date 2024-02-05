import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

type AnimatedViewProps = {
    imageName: any;
};

export default function AnimatedView({ imageName }: AnimatedViewProps) {
    const animation = useRef(null);

    return (
        <View style={styles.container}>
            <LottieView
                autoPlay={true}
                ref={animation}
                style={{
                    width: 210,
                    height: 210,
                }}
                // source={imageName}
                source={imageName}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
