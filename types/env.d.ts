/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 10:52:51
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
    VITE_APP_PREFIX_KEY: string;
    VITE_APP_POWER_KEY: string;
    VITE_APP_ROUTING_KEY: string;
    VITE_APP_CACHED_EXPIRE: number;
    VITE_APP_TITLE: string;
    VITE_APP_USE_DEBUG: boolean;
    VITE_APP_DROP_CONSOLE: boolean;
    VITE_APP_USE_MOCK: boolean;
    VITE_APP_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}

interface ImportMeta {
    env: ImportMetaEnv
}
