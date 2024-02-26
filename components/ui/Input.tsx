import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type PasswordInputProps = {
    type: 'password';
    isShowPassword: boolean;
    onToggleShowPassword: (isShowPassword: boolean) => void;
};

type TextInputProps = {
    type: 'text';
};

type InputProps = {
    label?: string;
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    error?: string;
} & (PasswordInputProps | TextInputProps);

export default function Input(props: InputProps) {
    function handleToggleShowPassword() {
        if (props.type === 'password') {
            props.onToggleShowPassword(!props.isShowPassword);
        }
    }

    function renderTogglePasswordIcon() {
        if (props.type !== 'password') return null;

        let iconName = '';
        if (props.isShowPassword) {
            iconName = ICONS.EYE_OUTLINE;
        } else {
            iconName = ICONS.EYE_OFF_OUTLINE;
        }

        return (
            <TouchableOpacity onPress={handleToggleShowPassword}>
                <Icon name={iconName} size={24} color={'black'} />
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            {props.label ? <Text style={styles.labelText}>{props.label}</Text> : null}
            <View
                style={[
                    styles.inputContainer,
                    props.error ? styles.invalidInputContainer : styles.validInputContainer,
                ]}
            >
                <TextInput
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    secureTextEntry={props.type === 'password' && !props.isShowPassword}
                    placeholderTextColor={COLORS.GRAY_03}
                />
                {renderTogglePasswordIcon()}
            </View>
            {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    labelText: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        backgroundColor: COLORS.GRAY_006,
        borderRadius: 999,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    invalidInputContainer: {
        borderColor: 'red',
        borderWidth: 1,
    },
    validInputContainer: {
        borderWidth: 2,
        borderColor: COLORS.GRAY_012,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 4,
    },
});
