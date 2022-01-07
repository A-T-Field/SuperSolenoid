/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 18:21:48
 * @Description: file content
 */
import type { DisplayType, InteractType } from '../types/share';

import { unref, ref } from 'vue';

class Share {
    protected selfInitialized = ref(false);
    protected selfMounted = ref(false);
    protected selfUnmounted = ref(false);
    protected selfLoading = ref(true);
    protected selfDisplay = ref<DisplayType>("visable");
    protected selfInteract = ref<InteractType>("modify");

    get initialized() {
        return unref(this.selfInitialized);
    }
    get mounted() {
        return unref(this.selfMounted);
    }
    get unmounted() {
        return unref(this.selfUnmounted);
    }
    get loading() {
        return unref(this.selfLoading);
    }
    get vissable() {
        return unref(this.selfDisplay) === 'visable';
    }
    get hidden() {
        return unref(this.selfDisplay) === 'hidden';
    }
    get modify() {
        return unref(this.selfInteract) === 'modify';
    }
    get preview() {
        return unref(this.selfInteract) === 'preview';
    }
    get disable() {
        return unref(this.selfInteract) === 'disable';
    }
    set loading(state: boolean) {
        this.selfLoading.value = state;
    }
    set visable(state: boolean) {
        this.setDisplay(state ? "vissable" : "hidden");
    }
    set hidden(state: boolean) {
        this.setDisplay(state ? "hidden" : "vissable");
    }
    set modify(state: boolean) {
        const type: InteractType = state ? "modify" : "preview";
        this.setInteract(type);
    }
    set preview(state: boolean) {
        const type: InteractType = state ? "preview" : "disable";
        this.setInteract(type);
    }
    set disable(state: boolean) {
        const type: InteractType = state ? "disable" : "modify";
        this.setInteract(type);
    }

    setDisplay = (type: DisplayType) => {
        this.selfDisplay.value = type;
    }
    setInteract = (type: InteractType) => {
        this.selfInteract.value = type;
    }
}

export {
    Share
}