/*
 * @Author: maggot-code
 * @Date: 2021-11-12 09:29:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 09:56:40
 * @Description: file content
 */
import { isArray } from '$/utils/is';
import { messageError } from '$/utils/tips';

const outputMessage = (item: any) => {
    const { message } = item;

    return {
        ...item,
        handlerMessage: messageError(message)
    }
}

function UseFormTips(error: Array<any>) {
    if (!isArray(error)) return [];

    return error.map((item: any) => item.map(outputMessage));
}

export default UseFormTips;