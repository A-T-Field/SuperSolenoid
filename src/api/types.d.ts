/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:13:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-14 18:12:13
 * @Description: file content
 */
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders
} from "axios";
import "axios";

declare module "axios" {
    interface VAxiosConfigOptions {
        baseURL?: string;
        port?: number;
        prefix?: string;
        prefixAlias?: string;
        timeout?: number;
        xsrfKey?: string;
    }

    interface VAxiosRequestConfig {
        url?: string;
        method?: RequestMethodsEnum;
        headers?: AxiosRequestHeaders;
        params?: URLSearchParams | Object<any>;
        data?: any;
        tag?: any;
    }

    type VAxiosConfig = AxiosRequestConfig<VAxiosConfigOptions>;

    type VAxiosInstance = AxiosInstance;

    interface VAxiosProxyBody {
        target: string;
        changeOrigin: boolean;
        secure: boolean;
        rewrite: Fn;
    }

    interface VAxiosProxy {
        prefix: string;
        prefixAlias: string;
        body: VAxiosProxyBody;
    }

    // <T = unknown, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
    // config = VAxiosRequestConfig
    // return = Promise<VAxiosRequestConfig>
    interface VAxiosSend<T = VAxiosRequestConfig> {
        (config: T): Promise<T>
    }
}