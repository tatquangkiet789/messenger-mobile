import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { Button, Input } from '@/components/ui';
import { COLORS, ICONS } from '@/constants';
import { useImagePicker } from '@/lib/hooks';
import { Icon } from '@/lib/components';

export default function RegisterScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const { handlePickImage } = useImagePicker();

    function handleSubmitRegisterForm() {
        console.log(`Submit`);
    }

    async function handlePickAvatar() {
        const avatar = await handlePickImage();
        console.log(avatar);
        setAvatar(avatar!);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.registerFormContainer}>
                        <ScrollView
                            style={styles.registerForm}
                            contentContainerStyle={{ rowGap: 16 }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.registerToContinueContainer}>
                                <Text style={styles.registerToContinueText}>
                                    Tạo tài khoản để tiếp tục với
                                </Text>
                                <Text style={styles.appNameText}>MessengerUI</Text>
                            </View>
                            <Input
                                type='text'
                                value={lastName}
                                onChangeText={setLastName}
                                placeholder='Nhập họ của bạn'
                                label='Họ của bạn'
                            />
                            <Input
                                type='text'
                                value={firstName}
                                onChangeText={setFirstName}
                                placeholder='Nhập tên của bạn'
                                label='Tên của bạn'
                            />
                            <Input
                                type='text'
                                value={email}
                                onChangeText={setEmail}
                                placeholder='Nhập email của bạn'
                                label='Email'
                            />
                            <Input
                                type='text'
                                value={username}
                                onChangeText={setUsername}
                                placeholder='Nhập tên tài khoản của bạn'
                                label='Tên tài khoản'
                            />
                            <Input
                                type='password'
                                value={password}
                                onChangeText={setPassword}
                                placeholder='Nhập mật khẩu của bạn'
                                label='Mật khẩu'
                                isShowPassword={isShowPassword}
                                onToggleShowPassword={setIsShowPassword}
                            />
                            <Input
                                type='password'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder='Nhập lại mật khẩu của bạn'
                                label='Nhập lại mật khẩu'
                                isShowPassword={isShowConfirmPassword}
                                onToggleShowPassword={setIsShowConfirmPassword}
                            />
                            <TouchableOpacity
                                onPress={handlePickAvatar}
                                style={styles.imagePickerButton}
                            >
                                <Text style={styles.imagePickerText}>Chọn ảnh đại diện</Text>
                                <Icon
                                    name={avatar ? ICONS.CHECK_OUTLINE : ICONS.IMAGE}
                                    size={24}
                                    color={COLORS.PRIMARY}
                                />
                            </TouchableOpacity>
                            <View style={styles.submitButtonContainer}>
                                <Button
                                    text='Đăng ký'
                                    onPress={handleSubmitRegisterForm}
                                    variant='primary'
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyHaveAccountText}>Bạn đã có tài khoản?</Text>
                        <Link style={styles.loginText} href='/(public)/'>
                            Đăng nhập
                        </Link>
                    </View>
                </View>
            </KeyboardAvoidingViewWrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.GRAY_241_241_242_1,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    registerFormContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 16,
    },
    registerForm: {
        paddingHorizontal: 16,
        paddingBottom: 48,
        backgroundColor: COLORS.WHITE,
        borderRadius: 8,
    },
    registerToContinueContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    registerToContinueText: {
        fontSize: 20,
        fontWeight: '500',
    },
    appNameText: {
        color: COLORS.PRIMARY,
        fontWeight: '600',
        fontSize: 16,
    },
    imagePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.PRIMARY,
    },
    imagePickerText: {
        fontSize: 16,
        color: COLORS.PRIMARY,
    },
    submitButtonContainer: {
        width: 'auto',
        marginVertical: 20,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.GRAY_012,
    },
    alreadyHaveAccountText: {
        fontSize: 16,
    },
    loginText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.PRIMARY,
        marginLeft: 4,
    },
});
