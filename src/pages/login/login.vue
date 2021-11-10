<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 14:28:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 17:14:23
 * @Description: file content
-->
<script setup lang='ts'>
import { onMounted } from 'vue';
import { loadBarEnd } from '$/utils/loading-bar';

import { default as LoginHead } from '@/pages/login/components/login-head';
import { default as LoginBody } from '@/pages/login/components/login-body';
import { default as LoginFoot } from '@/pages/login/components/login-foot';

onMounted(() => {
    loadBarEnd();
});
</script>

<template>
    <main class="ATF-login">
        <section class="ATF-login-main ATF-login-img">
            <img src="@/assets/images/login-bg.svg" alt="ATF" />
        </section>

        <section class="ATF-login-main ATF-login-form">
            <div class="ATF-login-form-head">
                <login-head></login-head>
            </div>

            <div class="ATF-login-form-body">
                <login-body></login-body>
            </div>

            <div class="ATF-login-form-foot">
                <login-foot></login-foot>
            </div>
        </section>
    </main>
</template>

<style scoped lang='scss'>
@import "@/style/login.scss";
</style>