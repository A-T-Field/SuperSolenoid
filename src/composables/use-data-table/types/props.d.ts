/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:48:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 10:27:28
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type { TableBaseColumn } from 'naive-ui/lib/data-table/src/interface';

export type position = 'left' | 'right';

export type sorter = 'descend' | 'ascend';

export type sizeType = 'small' | 'medium' | 'large';

export type alignType = position | 'center';

export type fixedType = position | boolean;

export type sortType = sorter | boolean;

export interface OptionColumn extends TableBaseColumn {
    key: string;
    mode?: string;
    children?: Array<OptionColumn>
}

export type dataType = Array<any>;

export type columnsType = Array<OptionColumn>;

export interface OptionProps {
    bordered?: boolean;
    indent?: number;
    rowClassName?: string;
    size?: sizeType;
    striped?: boolean;
    childrenKey?: string;
    rowKey?: string;
    loading?: boolean;
    data?: dataType;
    columns?: columnsType;
}

export interface BaseProps {
    readonly bottomBordered?: boolean;
    readonly cascade?: boolean;
    readonly pagination?: boolean;
    readonly flexHeight?: boolean;
    readonly remote?: boolean;
    readonly virtualScroll?: boolean;
    maxHeight?: number;
    minHeight?: number;
    scrollX?: number;
}

export type tableProps = OptionProps & BaseProps;

export type computedProps = ComputedRef<tableProps>;