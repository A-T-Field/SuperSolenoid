/*
 * @Author: maggot-code
 * @Date: 2021-12-13 22:36:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 23:34:49
 * @Description: file content
 */
export type VesselAttribute = Partial<{
    component: string;
    props: Record<string, any>;
    hasParent: boolean;
    isFirst: boolean;
    isLast: boolean;
    parentNode: Nullable<string>;
    prevNode: Nullable<string>;
    nextNode: Nullable<string>;
    children?: VesselOptions;
}>;