<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-30 16:24:41
 * @Description: file content
-->
<script setup lang='ts'>
import { ref } from 'vue';

const formRefs = ref(null);
const formValue = ref({
    input1: "",
    input2: ""
});
const formRules = {
    input1: {
        require: true,
        message: "请正面回答问题!",
        trigger: "blur"
    },
    input2: {
        require: true,
        message: "请正面回答问题!",
        trigger: "blur"
    }
};
</script>

<template>
    <div class="form-hand">
        <n-form
            ref="formRefs"
            :model="formValue"
            :rules="formRules"
            :disabled="false"
            :inline="false"
            :label-width="120"
            label-align="right"
            label-placement="left"
            :show-feedback="true"
            :show-label="true"
            :show-require-mark="true"
            required-mark-placement="right"
            size="large"
        >
            <!-- 
                feedback string 表单验证反馈信息
                validation-status 'error' | 'success' | 'warning' 表单验证状态
            -->
            <n-form-item
                :first="true"
                :ignore-path-change="false"
                label="为什么关注嘉然"
                label-align="right"
                label-placement="left"
                :label-style="{}"
                :label-width="120"
                path="input1"
            >
                <n-input placeholder="为什么关注嘉然?" v-model:value="formValue.input1"></n-input>
            </n-form-item>
        </n-form>
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