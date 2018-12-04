import axios, { AxiosRequestConfig } from 'axios';
import * as Qs from 'qs';
import * as cookie from 'src/app/utils/cookie';

export const appApi = axios.create({
    baseURL: 'http://localhost:3000',  // process.env.REACT_APP_DOCHUB_HOST
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    paramsSerializer(params: any) {
        return Qs.stringify(params, { arrayFormat: 'brackets' });
    }
});
appApi.interceptors.request.use((config: AxiosRequestConfig) => {
    let token: string = cookie.get(cookie.AUTHENTICAT_TOKEN);
    if (token) {
        config.headers = { 'Authorization': `Bearer ${token}` };
    }
    return config;
});
export const getFiles = (path: any) => appApi.get(path);
export const loginVerification = (data: any) => appApi.post(`/login`, data);
export const Registration = (data: any) => appApi.post(`/signup`, data);
export const createNewProject = (data: any) => appApi.post(`/project`, data);
export const getProjects = () => appApi.get(`/project`);
export const getProjectFiles = (id: number) => appApi.get(`/project/${id}/files`);
export const uploadFile = (id: number, data: any) => appApi.post(`/upload/${id}`, data);
