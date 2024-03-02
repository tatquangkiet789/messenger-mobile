import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Redirect, Slot, SplashScreen, router, useRouter, useSegments } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAccessToken } from '@/features/auth';
import { useSecureStorage } from '@/lib/hooks';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });
    const colorScheme = useColorScheme();
    const router = useRouter();
    const { handleGetValueFromSecureStorage } = useSecureStorage('ACCESS_TOKEN');

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        async function test() {
            const accessToken = await handleGetValueFromSecureStorage();
            if (!accessToken) {
                return router.replace('/(auth)/');
            } else {
                return router.replace('/(app)/(tabs)/');
            }
        }

        test();
    }, []);

    if (!loaded) {
        return null;
    }

    return <AppWrapper />;

    // return (
    //     <Provider store={store}>
    //         {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
    //         <QueryClientProvider client={queryClient}>
    //             <Slot />
    //         </QueryClientProvider>
    //         {/* </ThemeProvider> */}
    //     </Provider>
    // );
}

function AppWrapper() {
    return (
        <Provider store={store}>
            {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
            <QueryClientProvider client={queryClient}>
                <Slot />
            </QueryClientProvider>
            {/* </ThemeProvider> */}
        </Provider>
    );
}
