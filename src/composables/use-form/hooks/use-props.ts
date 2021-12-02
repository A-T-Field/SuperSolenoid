/*
 * @Author: maggot-code
 * @Date: 2021-12-02 16:38:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 17:12:58
 * @Description: file content
 */
import type { FormOptions } from '../types/form';

import { unref, reactive, computed } from 'vue';

const defaultProps: FormOptions = {
    display: "fit",
    disabled: false,
    inline: false,
    labelWidth: 120,
    labelAlign: "left",
    labelPlacement: "left",
    showFeedback: true,
    showLabel: true,
    showRequireMark: true,
    requireMarkPlacement: "right",
    size: "large",
    schema: []
};

function useProps(options: FormOptions) {
    const optionsRef = reactive(options);

    const props = computed<FormOptions>(() => {
        return { ...defaultProps, ...unref(optionsRef) };
    });

    return {
        props
    };
};

export default useProps;