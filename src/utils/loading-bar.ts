/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:59:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 13:59:04
 * @Description: file content
 */
export function loadBarStart() {
    window['$loadBarStart'] && window['$loadBarStart']();
};

export function loadBarEnd() {
    window['$loadBarEnd'] && window['$loadBarEnd']();
};

export function loadBarFail() {
    window['$loadBarFail'] && window['$loadBarFail']();
};