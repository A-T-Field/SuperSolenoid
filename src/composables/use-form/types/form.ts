/*
 * @Author: maggot-code
 * @Date: 2022-01-06 11:31:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 14:07:35
 * @Description: file content
 */
import type { GatherFields } from './share';

import { Schema } from '../model/Schema';

export interface IFormProps {
    schema?: Schema;
};

export interface FormStructureNode {
    field?: GatherFields;
    children?: Record<string, GatherFields>;
};

export type FormStructure = Record<string, FormStructureNode>;