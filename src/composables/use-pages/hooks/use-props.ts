/*
 * @Author: maggot-code
 * @Date: 2021-11-26 15:16:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 15:23:20
 * @Description: file content
 */
import type { pageProps, OptionProps } from '../types/props';

import { computed } from 'vue';

const defaultPageSizes = [10, 30, 50, 70, 90];

const defaultPageSlot = 8;

function useProps(optionsProps: OptionProps) {
    const defaultProps: pageProps = {
        showQuickJumper: true,
        showSizePicker: true,
        pageSizes: defaultPageSizes,
        pageSize: defaultPageSizes[0],
        pageSlot: defaultPageSlot,
        itemCount: 0,
        page: 0,
        disabled: false,
    };

    const props = computed<pageProps>(() => Object.assign({}, defaultProps, optionsProps));

    return {
        props,
        defaultProps
    }
}

export default useProps;