/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:50:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 11:01:30
 * @Description: file content
 */
import type { tableProps, OptionProps } from '../types/props';

import { computed } from 'vue';

function useProps(optionProps: OptionProps) {
    const defaultHooks: Fn = () => { };
    const defaultProps: tableProps = {
        bottomBordered: true,
        cascade: true,
        pagination: false,
        flexHeight: false,
        remote: false,
        virtualScroll: false,
        maxHeight: 240,
        minHeight: 120,
        scrollX: 0,
        bordered: true,
        indent: 12,
        rowClassName: "",
        size: "large",
        striped: true,
        childrenKey: "children",
        rowKey: "index",
        loading: false,
        data: [],
        columns: [],
        useIndex: true,
        useSelect: true,
        usePages: true,
        count: 0,
        page: 0,
        onWrapEvent: defaultHooks
    };

    const props = computed<tableProps>(() => Object.assign({}, defaultProps, optionProps));

    return {
        props,
        defaultProps,
        defaultHooks
    }
}

export default useProps;