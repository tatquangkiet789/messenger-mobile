import { AUTH_API, PUBLIC_API } from '@/lib/utils';
import { LoginDTO } from '../dtos/login';
import { API_URL, ENDPOINTS } from '@/constants';
import { CommonResponse, MessageResponse } from '@/models';
import { LoginResponse } from '../dtos/loginResponse';

// [POST] /api/v1/auth/login
export const loginService = async (loginDTO: LoginDTO) => {
    try {
        console.log(`API_URL: `, API_URL);
        const res = await PUBLIC_API.post(ENDPOINTS.LOGIN, loginDTO, {
            withCredentials: true,
        });
        return res.data as LoginResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};

// [POST] /api/v1/auth/register
export const registerService = async (formData: FormData) => {
    try {
        const res = await PUBLIC_API.post(ENDPOINTS.REGISTER, formData);
        return res.data as MessageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};

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
export const logoutService = async () => {
    try {
        const res = await AUTH_API.post(ENDPOINTS.LOGOUT, null);
        return res.data as MessageResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};

// [POST] /api/v1/auth/current-user
export const fetchCurrentUserByAccessTokenService = async () => {
    try {
        const res = await AUTH_API.post(ENDPOINTS.GET_CURRENT_USER_BY_ACCESS_TOKEN);
        return res.data as CommonResponse;
    } catch (error) {
        const err = error as Error;
        console.error(err);
        throw new Error(err.message);
    }
};