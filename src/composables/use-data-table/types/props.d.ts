/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:48:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 18:16:54
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type { TableBaseColumn, SorterMultiple, SortState } from 'naive-ui/lib/data-table/src/interface';

export type position = 'left' | 'right';

export type sizeType = 'small' | 'medium' | 'large';

export type alignType = position | 'center';

export type fixedType = position | false;

export type sortType = 'descend' | 'ascend' | false;

export interface SorterMultipleExpand extends SorterMultiple {
    sortName?: string
}

export interface SortStateExpand extends SortState {
    sorter: SorterMultipleExpand
}

export type sortersType = Array<SortStateExpand>;

export interface SortKeyType {
    [key: string]: sortType
};


export interface OptionColumn extends TableBaseColumn {
    key: string;
    mode?: string;
    sorter?: columnSorter;
    sortName?: string;
    isSort?: boolean;
    isExpand?: boolean;
    children?: Array<OptionColumn>;
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
    useSelect?: boolean;
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