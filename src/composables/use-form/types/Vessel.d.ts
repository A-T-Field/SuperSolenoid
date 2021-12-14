/*
 * @Author: maggot-code
 * @Date: 2021-12-13 22:36:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 11:17:13
 * @Description: file content
 */
export type VesselNodeProps = Partial<{
    level: number;
    path: string;
    hasParent: boolean;
    // isFirst: boolean;
    // isLast: boolean;
    parentNode: Nullable<string>;
    // prevNode: Nullable<string>;
    // nextNode: Nullable<string>;
}>;

export type VesselAttribute = VesselNodeProps & Partial<{
    component: string;
    props: Record<string, any>;
    children?: VesselOptions;
}>;