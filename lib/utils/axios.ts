import { API_URL, STORAGE_KEY } from '@/constants';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';

export const PUBLIC_API = axios.create({
    baseURL: API_URL,
    timeout: 60000,
});

export const AUTH_API = axios.create({
    baseURL: API_URL,
    timeout: 60000,
    withCredentials: true,
});

const accessTokenInterceptor = async (req: InternalAxiosRequestConfig) => {
    try {
        const accessToken = await SecureStore.getItemAsync(STORAGE_KEY.ACCESS_TOKEN);
        if (accessToken) {
            req.headers!['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
        }

        return req;
    } catch (error) {
        console.error(error);
        return Promise.reject((error as Error).message);
    }
};

AUTH_API.interceptors.request.use(accessTokenInterceptor);

export { AxiosError as ErrorResponse };
