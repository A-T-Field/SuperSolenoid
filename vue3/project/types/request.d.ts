/*
* @Author: maggot-code
* @Date: 2021-11-05 13:36:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-05 17:53:26
* @Description: file content
*/
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders
} from "axios";
import { RequestMethodsEnum } from "@/enums/http-enum";

export interface VAxiosConfigOptions {
    readonly baseURL?: string;
    readonly port?: number;
    readonly prefix?: string;
    readonly prefixAlias?: string;
    readonly timeout?: number;
    readonly xsrfKey?: string;
}

export interface VAxiosRequestConfig {
    url?: string;
    method?: RequestMethodsEnum;
    headers?: AxiosRequestHeaders;
    params?: URLSearchParams | Object<any>;
    data?: any;
    tag?: any;

    test?: any;
    mock?: boolean;
}

export type VAxiosConfig = AxiosRequestConfig<VAxiosConfigOptions>;

export type VAxiosInstance = AxiosInstance;

export interface VAxiosProxyBody {
    target: string;
    changeOrigin: boolean;
    secure: boolean;
    rewrite: Fn;
}

export interface VAxiosProxy {
    prefix: string;
    prefixAlias: string;
    body: VAxiosProxyBody;
}

// <T = unknown, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
// config = VAxiosRequestConfig
// return = Promise<VAxiosRequestConfig>
export interface VAxiosSend<T = VAxiosRequestConfig> {
    (config: T): Promise<T>
}