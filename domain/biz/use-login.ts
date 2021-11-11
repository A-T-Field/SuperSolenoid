/*
 * @Author: maggot-code
 * @Date: 2021-11-10 17:18:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 15:17:17
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { FormInst } from 'naive-ui';

import { ref, reactive } from 'vue';

import { isNull } from '$/utils/is';

interface LoginForm {
    (params: any, error: any, loading: Ref<boolean>): void
}

interface LoginOpitons {
    handlerForm?: LoginForm
}

function UseLogin(options?: LoginOpitons) {

    const formRefs = ref<FormInst | null>(null);
    const formLoading = ref(false);
    const formBody = reactive({
        username: "",
        password: ""
    });
    const formRules = {
        username: {
            required: true,
            message: "请输入用户名",
            trigger: 'blur'
        },
        password: {
            required: true,
            message: "请输入密码",
            trigger: 'blur'
        }
    };

    const handlerFormRules = (event: { preventDefault: () => void; }) => {
        if (isNull(formRefs.value)) return false;

        event.preventDefault();

        formRefs.value.validate(error => {
            if (error) {
                options?.handlerForm && options?.handlerForm({}, error, formLoading);
                return;
            }

            formLoading.value = true;
            options?.handlerForm && options?.handlerForm(formBody, [], formLoading);
        })
    };

    return {
        formRefs,
        formLoading,
        formBody,
        formRules,
        handlerFormRules
    }
}

export default UseLogin;