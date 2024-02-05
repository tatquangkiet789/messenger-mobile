import { ANIMATED_IMAGE } from '@/assets/animations';
import { KeyboardAvoidingViewWrapper } from '@/components';
import { Button, Input } from '@/components/ui';
import { COLORS } from '@/constants';
import { AnimatedView } from '@/lib/components';
import { Link } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    function handleSubmitLoginForm() {
        console.log(`Submit`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                <View style={styles.wrapper}>
                    <View style={styles.loginFormContainer}>
                        <View>
                            <ScrollView
                                style={styles.loginForm}
                                contentContainerStyle={{ rowGap: 16 }}
                            >
                                <AnimatedView imageName={ANIMATED_IMAGE.WELCOME} />
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
                                <View style={styles.submitButtonContainer}>
                                    <Button
                                        text='Đăng ký'
                                        onPress={handleSubmitLoginForm}
                                        variant='primary'
                                        iconName='home'
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.registerContainer}>
                        <Text style={styles.dontHaveAccountText}>Bạn không có tài khoản?</Text>
                        <Link style={styles.registerText} href='/(public)/register'>
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
