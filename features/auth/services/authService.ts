import { ENDPOINTS } from '@/constants';
import { CommonResponse, MessageResponse } from '@/features/models';
import { AUTH_API, PUBLIC_API } from '@/lib/utils';
import { user } from '@/data';
import { LoginForm, LoginResponse } from '../models/login';

// [POST] /api/v1/auth/login
export async function loginService(login: LoginForm) {
    try {
        const res = await PUBLIC_API.post(ENDPOINTS.LOGIN, login, {
            withCredentials: true,
        });
        return res.data as LoginResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}

// [POST] /api/v1/auth/register
export async function registerService(formData: FormData) {
    try {
        const res = await PUBLIC_API.post(ENDPOINTS.REGISTER, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res.data as MessageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}

// [POST] /api/v1/auth/refresh-token
export const refreshTokenService = async () => {
    try {
        const res = await AUTH_API.post(ENDPOINTS.REFRESH_TOKEN, null);
        return res.data as CommonResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};

// [POST] /api/v1/auth/update-password
export const updatePasswordService = async (formData: FormData) => {
    try {
        const res = await AUTH_API.post(ENDPOINTS.UPDATE_PASSWORD, formData);
        return res.data as MessageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};

// [POST] /api/v1/auth/logout
export async function logoutService() {
    try {
        // const res = await AUTH_API.post(ENDPOINTS.LOGOUT, null);
        // return res.data as MessageResponse;
        return new Promise<MessageResponse>((res, reject) => {
            setTimeout(() => {
                console.log(`Logout user after 1s`);
                res({ message: 'Đăng xuất thành công' });
            }, 1000);
        });
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}

// [POST] /api/v1/auth/current-user
export async function fetchCurrentUserByAccessTokenService() {
    try {
        const res = await AUTH_API.post(ENDPOINTS.FETCH_CURRENT_USER_BY_ACCESS_TOKEN);
        return res.data as CommonResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
}
