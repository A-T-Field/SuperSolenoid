/*
 * @Author: maggot-code
 * @Date: 2021-12-14 11:31:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 11:40:55
 * @Description: file content
 */
import { uid } from '@/utils/uid';
import { isNull } from '@/utils/is';

type SchemaExtends = Record<string, Partial<{
    key: string;
    children: SchemaExtends;
}>>;

export const useIterator = <S extends SchemaExtends>(schema: S, parentName?: Nullable<string>, level?: number) => {
    const data = {};

    for (const member in schema) {
        const { key, children } = schema[member];

        const nodeName = key ?? uid();

        const hasParent = !isNull(parentName ?? null);

        const path = hasParent ? `${parentName ?? null}.${nodeName}` : nodeName;

        const target = {
            ...schema[member],
            path,
            hasParent,
            level: level ?? 0,
            parentNode: parentName ?? null
        }

        if (children && Object.keys(children).length > 0) {
            target.children = useIterator(children, nodeName, level ?? 0 + 1)
        }

        data[nodeName] = target;
    }

    return data;
}