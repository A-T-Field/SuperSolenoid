/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:56:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-11 19:45:12
 * @Description: file content
 */
import type { Ref } from 'vue';

import { unref, ref } from 'vue';

class LifeCycle {
    protected _initialized: Ref<boolean> = ref(false);
    protected _mounted: Ref<boolean> = ref(false);
    protected _unmounted: Ref<boolean> = ref(false);

    get initialized() {
        return unref(this._initialized);
    }
    get mounted() {
        return unref(this._mounted);
    }
    get unmounted() {
        return unref(this._unmounted);
    }
    set initialized(state: boolean) {
        this._initialized.value = state;
    }
    set mounted(state: boolean) {
        this._mounted.value = state;
    }
    set unmounted(state: boolean) {
        this._unmounted.value = state;
    }

    onCreate = () => {
        if (this.initialized) return;

        this.initialized = true;
    }
    onMount = () => {
        if (this.mounted) return;

        this.mounted = true;
    }
    onUnmout = () => {
        if (this.unmounted) return;

        this.unmounted = true;
    }
};

export default LifeCycle;