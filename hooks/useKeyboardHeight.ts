import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export default function useKeyboardHeight() {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    function onKeyboardShow(e: KeyboardEvent) {
        setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardHide() {
        setKeyboardHeight(0);
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
        const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return keyboardHeight;
}
