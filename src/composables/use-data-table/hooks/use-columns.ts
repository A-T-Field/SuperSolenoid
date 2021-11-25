/*
 * @Author: maggot-code
 * @Date: 2021-11-25 10:45:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 17:57:17
 * @Description: file content
 */
import type { VNodeChild, ComputedRef } from 'vue';
import type { computedProps, columnsType, SortKeyType, OptionColumn } from '../types/props';

import { h, ref, unref, computed, watch } from 'vue';
import { isBoolean, isArray } from '@/utils/is';

import { NButton } from '@/plugins/naive-ui';

interface UseColumnsOptions {
    sortKeyMap: ComputedRef<SortKeyType>
}

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
        ...column,
        multiple: index,
    } : false;
}

const setSortOrder = (column: OptionColumn, options: UseColumnsOptions) => {
    const { key } = column;
    const { sortKeyMap } = options;

    const status = sortKeyMap.value[key] || false;

    return useSort(column) ? status : false;
}

const handlerColumn = (options: UseColumnsOptions) => (baseColumn: OptionColumn, index: number) => {
    const { key, mode } = baseColumn;

    const column: OptionColumn = {
        key,
        sorter: setSorter(baseColumn, index),
        sortOrder: setSortOrder(baseColumn, options)
    }

    if (mode) column.render = setRender(baseColumn);

    return Object.assign({}, baseColumn, column);
}

function handlerColumns(columns: columnsType, options: UseColumnsOptions) {
    // useSelect && columns?.unshift({
    //     key: "ATF-select",
    //     type: 'selection',
    //     align: 'center',
    //     fixed: "left",
    // });

    return columns.map(handlerColumn(options));
}

function useColumns(props: computedProps, options: UseColumnsOptions) {
    const columnsRef = ref(unref(props).columns);

    const getColumns = computed<columnsType>(() => {
        const columns = unref(columnsRef);

        if (!isArray(columns) || columns.length <= 0) return [];

        return handlerColumns(columns, options);
    });

    const setColumns = (columns: columnsType) => {
        columnsRef.value = columns;
    };

    const columnsWatch = watch(
        () => unref(props).columns,
        () => {
            columnsRef.value = unref(props).columns ?? []
        },
        { immediate: true }
    );

    return {
        getColumns,
        setColumns,
        columnsWatch
    }
}

export default useColumns;