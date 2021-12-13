/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:43:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:13:46
 * @Description: file content
 */
import { default as VAxios } from '@/api';

export const atfApi = new VAxios({
    prefix: 'atf',
});