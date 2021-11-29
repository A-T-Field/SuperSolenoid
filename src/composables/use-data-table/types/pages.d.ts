/*
 * @Author: maggot-code
 * @Date: 2021-11-29 10:34:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 14:02:56
 * @Description: file content
 */
import type { ComputedRef } from 'vue';

export type pageSizesType = [number, number, number, number, number];

export interface OptionProps {
    itemCount?: number;
    page?: number;
    disabled?: boolean;
};

export interface BaseProps {
    readonly showQuickJumper?: boolean;
    readonly showSizePicker?: boolean;
    pageSizes?: Array<number>;
    pageSize?: number;
    pageSlot?: number;
};

export type pageProps = OptionProps & BaseProps;

export type pageEventType = {
    count: number;
    size: number;
    page: number;
};

export type computedPageProps = ComputedRef<pageProps>;