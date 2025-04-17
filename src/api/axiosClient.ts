import axios, { AxiosRequestConfig } from 'axios';
import { PATH_API } from '../constants/pathApi';

const request = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});



request.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
);

request.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export const callAPI = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    data = {},
    extraHeaders?: Record<string, string>,
    extraParams?: Record<string, any>,
) => {
    try {
        const config: AxiosRequestConfig = {
            method,
            url: path,
            data,
        };

        if (extraHeaders) {
            const mergedHeaders = {
                ...request.defaults.headers.common,
                ...extraHeaders,
            };
            config.headers = mergedHeaders;
        }

        if (extraParams) {
            const mergedParams = {
                ...request.defaults.params,
                ...extraParams,
            };
            config.params = mergedParams;
        }

        const response = await request(config);
        return {
            data: response.data,
            statusCode: response.status,
            message: response.data.message,
        };
    } catch (error) {
        throw error;
    }
};
const token = localStorage.getItem('accessToken');
const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};

export const signUp = (data: any) => callAPI('POST', PATH_API.USER_REGISTER_API, data);

export const login = (data: any) => callAPI('POST', PATH_API.LOGIN_API, data);

export const forgotPassword = (data: any) => callAPI('POST', PATH_API.FORGOT_PASSWORD_API, data);

export const comfirmPasswordCode = (data: any) => callAPI('POST', PATH_API.COMFIRM_PASSWORD_CODE_API, data);


export const userList = (data: any, params?: Record<string, any>) => {
    return callAPI('POST', PATH_API.USER_LIST_API, data, headers, params);
};

export const deleteUser = (data: any) => {
    return callAPI('POST', PATH_API.DELETE_USER_API, data, headers);
};

export const detailUser = (data: any) => {
    return callAPI('POST', PATH_API.DETAIL_USER_API, data, headers);
};

export const updateUser = (data: any) => {
  return callAPI('POST', PATH_API.UPDATE_USER_API, data, headers);
};

