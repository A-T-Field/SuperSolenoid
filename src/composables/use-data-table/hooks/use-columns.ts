/*
 * @Author: maggot-code
 * @Date: 2021-11-25 10:45:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 16:50:08
 * @Description: file content
 */
import type { VNodeChild } from 'vue';
import type { computedProps, columnsType, OptionColumn } from '../types/props';

import { h, ref, unref, computed, watch } from 'vue';
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
        ...column,
        multiple: index,
    } : false;
}

const handlerColumn = (baseColumn: OptionColumn, index: number) => {
    const { key, mode } = baseColumn;

    const column: OptionColumn = {
        key,
        sorter: setSorter(baseColumn, index),
        // sortOrder: setSortOrder(baseColumn)
    }

    if (mode) column.render = setRender(baseColumn);

    return Object.assign({}, baseColumn, column);
}

function handlerColumns(columns: columnsType) {
    // useSelect && columns?.unshift({
    //     key: "ATF-select",
    //     type: 'selection',
    //     align: 'center',
    //     fixed: "left",
    // });

    return columns.map(handlerColumn);
}

function useColumns(props: computedProps) {
    const columnsRef = ref(unref(props).columns);

    const getColumns = computed<columnsType>(() => {
        const columns = unref(columnsRef);

        if (!isArray(columns) || columns.length <= 0) return [];

        return handlerColumns(columns);
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