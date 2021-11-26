/*
 * @Author: maggot-code
 * @Date: 2021-11-26 14:50:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 15:33:56
 * @Description: file content
 */
import type { ComputedRef } from 'vue';

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

export type computedProps = ComputedRef<pageProps>;