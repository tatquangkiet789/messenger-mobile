import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function useSkeletonAnimation() {
    const opacity = useRef(new Animated.Value(0.4));

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.4,
                    useNativeDriver: true,
                    duration: 1000,
                }),
            ]),
        );

        animation.start();

        return () => animation.stop();
    }, [opacity]);

    return opacity;
}
