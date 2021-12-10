<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 13:57:42
 * @Description: file content
-->
<script setup lang='ts'>
import { createForm } from '@/composables/use-data-form';
import { NInput } from 'naive-ui';
import FormProvider from '@/composables/use-data-form/component/FormProvider';
import FormField from '@/composables/use-data-form/component/FormField';

// import FormVessel from '@/composables/use-data-form/component/FormVessel';

const form = createForm({
    labelWidth: 120,
    labelPlacement: "left",
    requireMarkPlacement: "left"
});
</script>

<template>
    <div class="form-hand">
        <form-provider :form="form">
            <form-field
                name="jiaran"
                label="为什么关注嘉然"
                :component="[NInput, {
                    rule: [
                        {
                            required: true,
                            message: '正面回答',
                            trigger: ['input', 'blur']
                        }
                    ]
                }]"
            />
        </form-provider>
        <!-- <form-vessel :form="form" :schema="data"></form-vessel> -->
    </div>
</template>

<style scoped lang='scss'>
.form-hand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>