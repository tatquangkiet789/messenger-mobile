import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { ANIMATED_IMAGE } from '@/assets/animations';
import { KeyboardAvoidingViewWrapper } from '@/components';
import { Button, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import { LoginForm, loginSchema, useLogin } from '@/features/auth';
import { AnimatedView } from '@/lib/components';

export default function LoginScreen() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();
    const { isLoading, handleLogin } = useLogin({
        onSuccess: () => {
            console.log(`Navigating to ChatScreen`);
            router.replace('/(app)/(tabs)/');
        },
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        defaultValues: {
            username: 'user1',
            password: '123',
        },
        resolver: zodResolver(loginSchema),
    });

    function handleSubmitLoginForm(data: LoginForm) {
        handleLogin(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <KeyboardAvoidingViewWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.loginFormContainer}>
                        <View>
                            <ScrollView
                                style={styles.loginForm}
                                contentContainerStyle={{ rowGap: 16 }}
                                showsVerticalScrollIndicator={false}
                            >
                                <AnimatedView imageName={ANIMATED_IMAGE.WELCOME} size={210} />
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
                                <View style={styles.submitButtonContainer}>
                                    <Button
                                        text='Đăng nhập'
                                        onPress={handleSubmit(handleSubmitLoginForm)}
                                        variant='primary'
                                        isLoading={isLoading}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.registerContainer}>
                        <Text style={styles.dontHaveAccountText}>Bạn không có tài khoản?</Text>
                        <Link style={styles.registerText} href='/(auth)/register'>
                            Đăng ký
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
    loginFormContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loginForm: {
        paddingHorizontal: 16,
        paddingBottom: 48,
        backgroundColor: COLORS.WHITE,
        borderRadius: 8,
    },
    submitButtonContainer: {
        marginTop: 24,
        width: 'auto',
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.GRAY_012,
    },
    dontHaveAccountText: {
        fontSize: 16,
    },
    registerText: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.PRIMARY,
        marginLeft: 4,
    },
});
