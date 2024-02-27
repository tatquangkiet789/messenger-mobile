import { StorageKey } from '@/constants';
import * as SecureStore from 'expo-secure-store';
import { useCallback } from 'react';

export default function useSecureStorage(storageKey: StorageKey) {
    async function handleSetValueToSecureStorage(value: unknown) {
        try {
            await SecureStore.setItemAsync(storageKey, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    const handleGetValueFromSecureStorage = useCallback(async () => {
        try {
            const value = await SecureStore.getItemAsync(storageKey);
            if (value) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.error(error);
        }
    }, [storageKey]);

    async function handleRemoveValueFromSecureStorage() {
        try {
            await SecureStore.deleteItemAsync(storageKey);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        handleGetValueFromSecureStorage,
        handleRemoveValueFromSecureStorage,
        handleSetValueToSecureStorage,
    };
}
