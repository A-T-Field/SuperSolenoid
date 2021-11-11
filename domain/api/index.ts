/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:13:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 11:17:34
 * @Description: file content
 */
import type {
    AxiosRequestConfig,
    AxiosResponse,
    VAxiosConfigOptions,
    VAxiosRequestConfig,
    VAxiosConfig,
    VAxiosInstance,
    VAxiosProxy,
    VAxiosSend
} from 'axios';

import axios from 'axios';

import { ContentTypeEnum, RequestMethodsEnum } from '$/api/enum';

// import axios from "axios";
import { getOrigin, getPort } from '$/utils';

const { DEV } = import.meta.env;

class VAxios {
    constructor(options?: VAxiosConfigOptions) {
        this.options = options;
        this.config = this.setConfig(this.options);
        this.instance = this.create(this.config);

        this.interceptorsInstall();
    }
    private instance: VAxiosInstance;
    private options?: VAxiosConfigOptions;
    private config: VAxiosConfig;
    private create = (config: VAxiosConfig): VAxiosInstance => {
        return axios.create(config);
    }
    private setConfig = (options?: VAxiosConfigOptions): VAxiosConfig => {
        const baseURL = options?.baseURL ?? getOrigin();
        const port = options?.port ?? getPort();
        const prefix = options?.prefix ?? "";
        const timeout = options?.timeout ?? 0;
        const xsrfKey = options?.xsrfKey ?? "XSRF-TOKEN";
        const method = RequestMethodsEnum.GET;
        const headers = {
            Accept: ContentTypeEnum.JSON
        };

        return {
            baseURL: `${baseURL}:${port}/${prefix}/`,
            method,
            headers,
            timeout: timeout * 1000,
            xsrfCookieName: xsrfKey,
            xsrfHeaderName: xsrfKey,
            withCredentials: false,
            decompress: true,
            validateStatus: (status) => status < 400,
        }
    }
    private interceptorsInstall = (): void => {
        this.instance.interceptors.request.use(this.requestInterceptors, undefined);

        this.instance.interceptors.response.use(this.responseInterceptors, undefined);
    }
    private requestInterceptors = (config: AxiosRequestConfig): AxiosRequestConfig => {
        console.log(config);
        return config;
    }
    private responseInterceptors = (response: AxiosResponse<any>) => {
        return response;
    }
    proxy(): VAxiosProxy {
        const port = this.options?.port ?? getPort();
        const baseURL = this.options?.baseURL ?? getOrigin();
        const prefix = this.options?.prefix ?? "";
        const prefixAlias = this.options?.prefixAlias ?? prefix;

        return {
            prefix: `/${prefix}`,
            prefixAlias: `/${prefixAlias}`,
            body: {
                target: `${baseURL}:${port}`,
                changeOrigin: true,
                secure: false,
                rewrite: (path: string) => path.replace(`/${prefix}/`, '')
            }
        }
    }
    send: VAxiosSend<VAxiosRequestConfig> = (config) => {
        const { mock, test } = config;

        return new Promise((resolve, reject) => {
            if (DEV && mock) return resolve(test);

            this.instance.request<VAxiosRequestConfig>(Object.assign({}, this.config, config))
                .then(resolve)
                .catch(reject)
        })
    }
}

export default VAxios;