/*
 * @Author: maggot-code
 * @Date: 2021-12-17 10:47:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:32:48
 * @Description: file content
 */
import type { ShareProps } from './Share';
import type { FieldGather } from './Field';

export type FormProps = Partial<ShareProps & {}>;

export type FormFieldsGather = Record<string, FieldGather>;