/*
 * @Author: maggot-code
 * @Date: 2021-11-11 17:43:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 09:45:18
 * @Description: file content
 */
export const setupMessageOptions = () => {
    return {
        closable: true,
        duration: 5000,
        keepAliveOnHover: true
    }
}

export function messageCloseAll() {
    window['$message'].destroyAll();
}

export function messageSuccess(text: string) {
    return window['$message'].success(text, setupMessageOptions())
}

export function messageWarning(text: string) {
    return window['$message'].warning(text, setupMessageOptions())
}

export function messageError(text: string) {
    return window['$message'].error(text, setupMessageOptions())
}

export function messageLoading(text: string) {
    return window['$message'].loading(text, setupMessageOptions())
}