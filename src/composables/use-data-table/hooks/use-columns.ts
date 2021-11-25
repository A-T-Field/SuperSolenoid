/*
 * @Author: maggot-code
 * @Date: 2021-11-25 10:45:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 14:38:23
 * @Description: file content
 */
import type { VNodeChild } from 'vue';
import type { computedProps, OptionColumn } from '../types/props';

import { h, ref, unref, computed } from 'vue';
import { isBoolean, isArray } from '@/utils/is';

import { NButton } from '@/plugins/naive-ui';

const useSort = (column: OptionColumn) => {
    const { isSort } = column;

    return isBoolean(isSort) ? isSort : false;
}

const setRender = (column: OptionColumn) => (rowData: any, rowIndex: number): VNodeChild => {
    const { key } = column;

    return h(
        NButton,
        {},
        {
            default: () => rowData[key]
        }
    );
}

const setSorter = (column: OptionColumn, index: number) => {
    return useSort(column) ? {
        multiple: index
    } : false;
}

const setColumn = (baseColumn: OptionColumn, index: number) => {
    const { key, isExpand, mode } = baseColumn;
    const column: OptionColumn = {
        key,
        sorter: setSorter(baseColumn, index),
        // sortOrder: setSortOrder(baseColumn)
    }

    if (isExpand) column.type = 'expand';

    if (mode) column.render = setRender(baseColumn);

    return Object.assign({}, baseColumn, column);
}

function handlerColumns(props: computedProps) {
    const { columns, useSelect } = unref(props);

    useSelect && columns?.unshift({
        key: "ATF-select",
        type: 'selection',
        align: 'center',
        fixed: "left",
    });

    return columns?.map(setColumn);
}

function useColumns(props: computedProps): any {
    const columnsRef = ref(handlerColumns(props));

    const getColumns = computed(() => {
        const columns = unref(columnsRef);

        if (!isArray(columns) || columns.length <= 0) return [];

        return columns;
    });

    return {
        getColumns
    }
}

export default useColumns;