/*
 * @Author: maggot-code
 * @Date: 2021-12-15 23:44:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 09:54:09
 * @Description: file content
 */
import type { DisplayType, InteractType } from './Public';

export type ShareProps = {
    loading: boolean;
    display: DisplayType;
    interact: InteractType;
};