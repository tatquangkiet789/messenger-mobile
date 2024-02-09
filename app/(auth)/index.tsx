import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ANIMATED_IMAGE } from '@/assets/animations';
import { KeyboardAvoidingViewWrapper } from '@/components';
import { Button, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import {
    LoginForm,
    LoginResponse,
    fetchCurrentUserByAccessTokenThunk,
    loginSchema,
    loginThunk,
} from '@/features/auth';
import { AnimatedView } from '@/lib/components';
import { useSecureStorage } from '@/lib/hooks';
import { useAppDispatch } from '@/store/hooks';

export default function LoginScreen() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { handleSetValueToSecureStorage } = useSecureStorage('ACCESS_TOKEN');
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
        setIsLoading(true);
        dispatch(loginThunk(data))
            .unwrap()
            .then((data: LoginResponse) => {
                handleSetValueToSecureStorage(data.accessToken).then(() => {
                    dispatch(fetchCurrentUserByAccessTokenThunk())
                        .unwrap()
                        .then(() => {
                            setIsLoading(false);
                            router.replace('/(app)/(tabs)/');
                        });
                });
            });
    }
    console.log(isLoading);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.loginFormContainer}>
                        <View>
                            <ScrollView
                                style={styles.loginForm}
                                contentContainerStyle={{ rowGap: 16 }}
                                showsVerticalScrollIndicator={false}
                            >
                                <AnimatedView imageName={ANIMATED_IMAGE.WELCOME} />
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
