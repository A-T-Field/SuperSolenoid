/*
 * @Author: maggot-code
 * @Date: 2021-11-05 14:43:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-05 14:50:16
 * @Description: file content
 */
import { isEmptyString } from '@/utils/is-type';

export const getOrigin = (): string => {
    const { protocol, hostname } = window.location;
    return `${protocol}//${hostname}`;
}

export const getPort = (): number => {
    const { port } = window.location;

    return isEmptyString(port) ? 80 : +port;
}