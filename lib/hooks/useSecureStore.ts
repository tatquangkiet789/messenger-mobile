import { useCallback, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StorageKey } from '@/constants';

export default function useSecureStorage(storageKey: StorageKey) {
    const [value, setValue] = useState<unknown>();

    async function handleSetValueToSecureStorage(value: unknown) {
        try {
            await SecureStore.setItemAsync(storageKey, JSON.stringify(value));
            setValue(value);
        } catch (error) {
            console.error(error);
        }
    }

    const handleGetValueFromSecureStorage = useCallback(async () => {
        try {
            const value = await SecureStore.getItemAsync(storageKey);
            if (value) {
                setValue(JSON.parse(value));
            }
        } catch (error) {
            console.error(error);
        }
    }, [storageKey]);

    async function handleRemoveValueFromSecureStorage() {
        try {
            await SecureStore.deleteItemAsync(storageKey);
            setValue(null);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleGetValueFromSecureStorage();
    }, [handleGetValueFromSecureStorage]);

    return { value, handleRemoveValueFromSecureStorage, handleSetValueToSecureStorage };
}
