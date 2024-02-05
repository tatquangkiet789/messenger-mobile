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
        <View>
            {props.label ? <Text style={styles.labelText}>{props.label}</Text> : null}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    secureTextEntry={props.type === 'password' && !props.isShowPassword}
                />
                {renderTogglePasswordIcon()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontSize: 12,
        marginBottom: 4,
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: COLORS.GRAY_012,
        backgroundColor: COLORS.GRAY_006,
        borderRadius: 8,
        padding: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});
