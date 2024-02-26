import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';

type ButtonProps = {
    text: string;
    variant: 'primary' | 'outlined' | 'default';
    onPress: () => void;
    iconName?: string;
    isLoading?: boolean;
};

const iconColor = {
    primary: COLORS.WHITE,
    outlined: COLORS.PRIMARY,
    default: COLORS.BLACK,
};

export default function Button({
    text,
    variant,
    iconName,
    onPress,
    isLoading = false,
}: ButtonProps) {
    function getIconColor() {
        return iconColor[variant];
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, styles[variant]]}
            disabled={isLoading}
        >
            {isLoading ? (
                // <Icon name={ICONS.RELOAD} size={24} color={getIconColor()} />
                <ActivityIndicator color={getIconColor()} size={'small'} />
            ) : (
                <>
                    {iconName ? <Icon name={iconName} size={24} color={getIconColor()} /> : null}
                    <Text style={[styles.buttonText, styles[`${variant}Text`]]}>{text}</Text>
                </>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8,
        gap: 8,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 16,
    },
    primary: {
        backgroundColor: COLORS.PRIMARY,
    },
    primaryText: {
        color: COLORS.WHITE,
    },
    outlined: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.PRIMARY,
    },
    outlinedText: {
        color: COLORS.PRIMARY,
    },
    default: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.GRAY_03,
    },
    defaultText: {
        color: COLORS.BLACK,
    },
});
