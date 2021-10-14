/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-14 17:57:04
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
    readonly VITE_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
