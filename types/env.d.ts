/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 17:42:30
 * @Description: file content
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv extends Readonly<Record<string, any>> {
    readonly VITE_APP_PREFIX_KEY: string;
    readonly VITE_APP_POWER_KEY: string;
    readonly VITE_APP_ROUTING_KEY: string;
    readonly VITE_APP_CACHED_EXPIRE: number;
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_USE_DEBUG: boolean;
    readonly VITE_APP_DROP_CONSOLE: boolean;
    readonly VITE_APP_USE_MOCK: boolean;
    readonly VITE_APP_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    readonly VITE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
