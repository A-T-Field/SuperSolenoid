/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:45:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 13:54:12
 * @Description: file content
 */
import type { DataTableProps } from 'naive-ui';
import type { OptionProps } from './types/props';

import { unref, computed } from 'vue';

import { default as useProps } from './hooks/use-props';
import { default as useSize } from './hooks/use-size';
import { default as useSort } from './hooks/use-sort';
import { default as useElement } from './hooks/use-element';
import { default as useLoading } from './hooks/use-loading';
import { default as useDataSource } from './hooks/use-data-source';
import { default as useColumns } from './hooks/use-columns';

function useDataTable(optionProps: OptionProps) {
    console.log('use data table');
    const { props } = useProps(optionProps);

    const {
        getMaxHeight,
        setMaxHeight
    } = useSize(props);

    const handlerElement = (element?: HTMLElement): void => {
        const parent = element?.parentElement;

        const height = parent?.clientHeight ?? 0;

        setMaxHeight(height - 90 <= 0 ? 0 : height - 90);
    }

    const {
        tableElRef,
        tableElWatch
    } = useElement(handlerElement);

    const {
        getLoading,
        setLoading,
        loadingWatch
    } = useLoading(props);

    const {
        getRowKey,
        getDataSource,
        setDataSource,
        dataSourceWatch
    } = useDataSource(props);

    const {
        getColumns
    } = useColumns(props);

    const {
        setSorters
    } = useSort(props);

    const uninstall = [
        tableElWatch,
        loadingWatch,
        dataSourceWatch
    ];

    const tableDataBind = computed(() => {
        const bind: DataTableProps = {
            loading: unref(getLoading),
            maxHeight: unref(getMaxHeight),
            data: unref(getDataSource),
            columns: unref(getColumns),
            rowKey: unref(getRowKey),
            onUpdateSorter: setSorters
        };

        return Object.assign({}, unref(props), bind);
    });

    return {
        props,
        tableElRef,
        tableDataBind,
        uninstall,
        setLoading,
        setDataSource,
    }
}

export {
    useProps,
    useLoading
}

export default useDataTable;