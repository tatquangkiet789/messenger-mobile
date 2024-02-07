import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function useImagePicker() {
    // const [status, requestPermisson] = ImagePicker.useMediaLibraryPermissions();
    async function requestMediaLibraryPermission() {
        if (Platform.OS === 'web') return;

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.error(`Access denied`);
        }
    }

    async function handlePickImage() {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                return result.assets[0].uri;
            }
        } catch (error) {
            const err = error as Error;
            console.error(err);
            throw new Error(err.message);
        }
    }

    useEffect(() => {
        requestMediaLibraryPermission();
    }, []);

    return { handlePickImage };
}
