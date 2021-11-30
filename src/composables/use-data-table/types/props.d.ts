/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:48:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-30 10:01:01
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type {
    TableColumn,
    SorterMultiple,
    SortState
} from 'naive-ui/lib/data-table/src/interface';
import type { pageSizesTuple, pageEventType } from './pages';

export type position = 'left' | 'right';

export type sizeType = 'small' | 'medium' | 'large';

export type alignType = position | 'center';

export type fixedType = position | false;

export type sortType = 'descend' | 'ascend' | false;

export interface SorterMultipleExpand extends SorterMultiple {
    sortName?: string;
};

export interface SortStateExpand extends SortState {
    sorter: SorterMultipleExpand;
};

export type sortersType = Array<SortStateExpand>;

export interface SortKeyType {
    [key: string]: sortType;
};

export interface CheckKeyType {
    [key: string]: string | number;
}

export type OptionColumn = {
    key: string;
    mode?: string;
    sorter?: columnSorter;
    sortName?: string;
    isSort?: boolean;
    isExpand?: boolean;
    children?: Array<OptionColumn & TableColumn>;
} & TableColumn;

export type columnsType = Array<OptionColumn>;

export type dataType = Array<any>;

export type wrapEventType = {
    sort: SortKeyType;
    page: pageEventType;
};

export type computedWrapEvent = ComputedRef<wrapEventType>;

export type wrapeventHooks = (wrapevent: wrapEventType) => void;

export interface OnWrapeventHooks {
    hooks: wrapeventHooks;
}

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
    useIndex?: boolean;
    useSelect?: boolean;
    usePages?: boolean;
    count?: number;
    page?: number;
    pageSize?: number;
    pageDisalbed?: boolean;
    pageSizes?: pageSizesTuple;
};

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
};

export type tableProps = OptionProps & BaseProps;

export type computedProps = ComputedRef<tableProps>;