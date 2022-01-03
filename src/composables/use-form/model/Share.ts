/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 23:07:38
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { DisplayType, InteractType, IShareProps } from './types';

import { unref, ref } from 'vue';

class Share {
    protected selfInitialized!: Ref<boolean>;
    protected selfMounted!: Ref<boolean>;
    protected selfUnmounted!: Ref<boolean>;
    protected selfDisplay!: Ref<DisplayType>;
    protected selfInteract!: Ref<InteractType>;
    protected selfLoading!: Ref<boolean>;

    constructor(props?: IShareProps) {
        this.selfInitialized = ref(false);
        this.selfMounted = ref(false);
        this.selfUnmounted = ref(false);

        this.selfDisplay = ref(props?.display ?? "visable");
        this.selfInteract = ref(props?.interact ?? "modify");
        this.selfLoading = ref(props?.loading ?? true);
    }

    get initialized() {
        return unref(this.selfInitialized);
    }
    get mounted() {
        return unref(this.selfMounted);
    }
    get unmounted() {
        return unref(this.selfUnmounted);
    }
    get display() {
        return unref(this.selfDisplay);
    }
    get interact() {
        return unref(this.selfInteract);
    }
    get loading() {
        return unref(this.selfLoading);
    }
    get visable() {
        return this.display === 'visable';
    }
    get hidden() {
        return this.display === 'hidden';
    }
    get modify() {
        return this.interact === 'modify';
    }
    get preview() {
        return this.interact === 'preview';
    }
    get disable() {
        return this.interact === 'disable';
    }
    set initialized(state: boolean) {
        this.selfInitialized.value = state;
    }
    set mounted(state: boolean) {
        this.selfMounted.value = state;
    }
    set unmounted(state: boolean) {
        this.selfUnmounted.value = state;
    }
    set display(type: DisplayType) {
        this.selfDisplay.value = type;
    }
    set interact(type: InteractType) {
        this.selfInteract.value = type;
    }
    set loading(state: boolean) {
        this.selfLoading.value = state;
    }
}

export {
    Share
}