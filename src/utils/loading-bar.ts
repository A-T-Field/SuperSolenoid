/*
 * @Author: maggot-code
 * @Date: 2021-11-01 11:31:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 13:09:55
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