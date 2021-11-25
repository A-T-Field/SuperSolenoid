/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:45:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 10:31:36
 * @Description: file content
 */
import type { DataTableProps } from 'naive-ui';
import type { OptionProps } from './types/props';

import { unref, computed } from 'vue';

import { default as useProps } from './hooks/use-props';
import { default as useElement } from './hooks/use-element';
import { default as useLoading } from './hooks/use-loading';
import { default as useSize } from './hooks/use-size';
import { default as useDataSource } from './hooks/use-data-source';

function useDataTable(optionProps: OptionProps) {
    console.log('use data table');
    const { props } = useProps(optionProps);

    const {
        getMaxHeight,
        setMaxHeight
    } = useSize(props);

    const handlerElement = (element?: HTMLElement): void => {
        const parent = element?.parentElement;

        setMaxHeight(parent?.clientHeight);
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
        dataSourceWatch
    } = useDataSource(props);

    const uninstall = [
        tableElWatch,
        loadingWatch,
        dataSourceWatch
    ];

    const tableDataBind = computed(() => {
        const bind: DataTableProps = {
            loading: unref(getLoading),
            rowKey: unref(getRowKey),
            data: unref(getDataSource),
            maxHeight: unref(getMaxHeight)
        };

        return Object.assign({}, unref(props), bind);
    });

    return {
        props,
        tableElRef,
        tableDataBind,
        uninstall,
        setLoading
    }
}

export {
    useProps,
    useLoading
}

export default useDataTable;