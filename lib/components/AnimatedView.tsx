import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

type AnimatedViewProps = {
    imageName: any;
    size: number;
};

export default function AnimatedView({ imageName, size }: AnimatedViewProps) {
    const animation = useRef(null);

    return (
        <View style={styles.container}>
            <LottieView
                autoPlay={true}
                ref={animation}
                style={{
                    width: size,
                    height: size,
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
