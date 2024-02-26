import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { Button, Input } from '@/components/ui';
import { COLORS, ICONS } from '@/constants';
import { useImagePicker } from '@/lib/hooks';
import { Icon } from '@/lib/components';
import { RegisterForm, registerSchema } from '@/features/auth';

export default function RegisterScreen() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const { handlePickImage } = useImagePicker();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    function handleSubmitRegisterForm(data: RegisterForm) {
        console.log(`Register form data: `, data);
    }

    async function handlePickAvatar() {
        const avatar = await handlePickImage();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
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
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='text'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập họ của bạn'
                                        label='Họ của bạn'
                                        error={errors.lastName?.message}
                                    />
                                )}
                                name='lastName'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='text'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập tên của bạn'
                                        label='Tên của bạn'
                                        error={errors.firstName?.message}
                                    />
                                )}
                                name='firstName'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='text'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập email của bạn'
                                        label='Email'
                                        error={errors.email?.message}
                                    />
                                )}
                                name='email'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='text'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập tên tài khoản của bạn'
                                        label='Tên tài khoản'
                                        error={errors.username?.message}
                                    />
                                )}
                                name='username'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='password'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập mật khẩu của bạn'
                                        label='Mật khẩu'
                                        isShowPassword={isShowPassword}
                                        onToggleShowPassword={setIsShowPassword}
                                        error={errors.password?.message}
                                    />
                                )}
                                name='password'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        type='password'
                                        value={value}
                                        onChangeText={onChange}
                                        placeholder='Nhập lại mật khẩu của bạn'
                                        label='Nhập lại mật khẩu'
                                        isShowPassword={isShowConfirmPassword}
                                        onToggleShowPassword={setIsShowConfirmPassword}
                                        error={errors.confirmPassword?.message}
                                    />
                                )}
                                name='confirmPassword'
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const avatar = await handlePickImage();
                                            onChange(avatar);
                                        }}
                                        style={styles.imagePickerButton}
                                    >
                                        <Text style={styles.imagePickerText}>
                                            Chọn ảnh đại diện
                                        </Text>
                                        <Icon
                                            name={value ? ICONS.CHECK_OUTLINE : ICONS.IMAGE}
                                            size={24}
                                            color={COLORS.PRIMARY}
                                        />
                                    </TouchableOpacity>
                                )}
                                name='avatar'
                            />
                            {/* <TouchableOpacity
                                onPress={handlePickAvatar}
                                style={styles.imagePickerButton}
                            >
                                <Text style={styles.imagePickerText}>Chọn ảnh đại diện</Text>
                                <Icon
                                    name={avatar ? ICONS.CHECK_OUTLINE : ICONS.IMAGE}
                                    size={24}
                                    color={COLORS.PRIMARY}
                                />
                            </TouchableOpacity> */}
                            <View style={styles.submitButtonContainer}>
                                <Button
                                    text='Đăng ký'
                                    onPress={handleSubmit(handleSubmitRegisterForm)}
                                    variant='primary'
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.loginContainer}>
                        <Text style={styles.alreadyHaveAccountText}>Bạn đã có tài khoản?</Text>
                        <Link style={styles.loginText} href='/(auth)/'>
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
