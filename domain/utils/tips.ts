/*
 * @Author: maggot-code
 * @Date: 2021-11-11 17:43:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 18:27:20
 * @Description: file content
 */
type messagePlacement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

export const setupMessageOptions = (pos: messagePlacement) => {
    return {
        closable: true,
        duration: 5000,
        max: 10,
        placement: pos,
        "keep-alive-on-hover": true
    }
}

export const topMessage = () => setupMessageOptions('top');

export const topleftMessage = () => setupMessageOptions('top-left');

export const toprightMessage = () => setupMessageOptions('top-right');

export const bottomMessage = () => setupMessageOptions('bottom');

export const bottomleftMessage = () => setupMessageOptions('bottom-left');

export const bottomrightMessage = () => setupMessageOptions('bottom-right');

export function handlerMessage(options) {

}

export function messageCloseAll() {
    window['$message'].destroyAll();
}

export function messageSuccess() {
    console.log('message success');
}

export function messageWarning() {
    console.log('message warning');
}

export function messageError() {
    console.log('message error');
}

export function messageLoading() {
    console.log('message loading');
}