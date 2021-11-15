/*
 * @Author: maggot-code
 * @Date: 2021-11-10 17:18:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 11:19:55
 * @Description: file content
 */
import type { FormInst } from 'naive-ui';

import { ref, reactive } from 'vue';

import { isNull } from '$/utils/is';

interface LoginOpitons { }

export interface FormBody {
    username: string;
    password: string;
}

function useLogin(options?: LoginOpitons) {
    const formRefs = ref<FormInst | null>(null);
    const formLoading = ref(false);
    const formBody = reactive<FormBody>({
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

    const handlerFormRules = (): Promise<Error | undefined> => {
        return new Promise((resolve, reject) => {
            if (isNull(formRefs.value)) return resolve(undefined);

            formRefs.value.validate(error => {
                if (error) return reject(error);

                formLoading.value = true;

                return resolve(undefined);
            });
        });
    }

    return {
        formRefs,
        formLoading,
        formBody,
        formRules,
        handlerFormRules,
    }
}

export default useLogin;