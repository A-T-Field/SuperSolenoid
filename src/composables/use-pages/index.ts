/*
 * @Author: maggot-code
 * @Date: 2021-11-26 14:21:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 15:46:03
 * @Description: file content
 */
import type { PaginationProps } from 'naive-ui';
import type { OptionProps } from './types/props';

import { unref, computed } from 'vue';

import { default as useProps } from './hooks/use-props';
import { default as usePageSizes } from './hooks/use-page-sizes';
import { default as usePage } from './hooks/use-page';

function usePages(optionsProps?: OptionProps) {
    console.log('use pages');
    const { props } = useProps(optionsProps ?? {});

    const {
        getPageSize,
        setPageSize,
        pageSizeWatchEffect
    } = usePageSizes(props);

    const {
        getItemCount,
        getPageNumber,
        setItemCount,
        setPageNumber,
        itemCountWatchEffect,
        pageNumberWatchEffect
    } = usePage(props);

    const handlerUninstall = () => {
        pageSizeWatchEffect();
        itemCountWatchEffect();
        pageNumberWatchEffect();
    };

    const pageBind = computed(() => {
        const bind: PaginationProps = {
            pageSize: unref(getPageSize),
            itemCount: unref(getItemCount),
            page: unref(getPageNumber),
            onUpdatePage: setPageNumber,
            onUpdatePageSize: setPageSize
        };

        return Object.assign({}, unref(props), {
            ...bind,
            style: {
                ['justify-content']: 'center'
            }
        });
    });

    return {
        props,
        pageBind,
        getItemCount,
        getPageNumber,
        setItemCount,
        setPageNumber,
        pageUninstall: handlerUninstall
    }
}

export default usePages;