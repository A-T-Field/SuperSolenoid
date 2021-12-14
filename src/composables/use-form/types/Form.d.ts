/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:55:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 14:13:24
 * @Description: file content
 */
import type { OmitState, PickupPropertyNames } from './Public';
import type { ShareOptions } from './Share';
import type { SchemaIterator, SchemaMemberIterator } from './Schema';

import { Field } from '../model/Field';

export type FormOptions = ShareOptions & {
    schema: SchemaIterator;
};

export type FormOptionsBase = Pick<
    FormOptions,
    PickupPropertyNames<OmitState<FormOptions>>
>;