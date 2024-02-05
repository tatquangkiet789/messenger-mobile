import React, { ReactNode } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

type KeyboardAvoidingViewWrapperProps = {
    children: ReactNode;
};

export default function KeyboardAvoidingViewWrapper({
    children,
}: KeyboardAvoidingViewWrapperProps) {
    function handleDismissKeyboard() {
        Keyboard.dismiss();
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
