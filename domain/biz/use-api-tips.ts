/*
 * @Author: maggot-code
 * @Date: 2021-11-12 09:48:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 09:57:43
 * @Description: file content
 */
import { messageWarning } from '$/utils/tips';

function UseApiTips(response: any) {
    const { data } = response;

    const { code, message } = data;

    if (code <= 0) return response;

    messageWarning(message);

    return Promise.reject();
}

export default UseApiTips;