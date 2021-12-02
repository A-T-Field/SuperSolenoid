/*
 * @Author: maggot-code
 * @Date: 2021-12-02 12:26:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 15:42:18
 * @Description: file content
 */
import type { FormBase, FormBaseNull } from '../types/form';

import { unref, ref, computed } from 'vue';

function useForm() {
    const formRef = ref<FormBaseNull>(null);

    const useFormRef = computed(() => {
        return unref(formRef) as FormBase;
    });

    return {
        formRef,
        useFormRef,
    }
};

export default useForm;