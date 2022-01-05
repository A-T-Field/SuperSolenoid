/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-04 10:28:01
 * @Description: file content
 */
import type { DisplayType, InteractType } from './types';

import { unref, ref } from 'vue';

class Share {
    protected initialized = ref(false);
    protected mounted = ref(false);;
    protected unmounted = ref(false);
    protected selfDisplay = ref<DisplayType>("visable");
    protected selfInteract = ref<InteractType>("modify");

    loading = ref(true);

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