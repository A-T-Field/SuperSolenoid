/*
 * @Author: maggot-code
 * @Date: 2021-11-25 09:35:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 09:56:02
 * @Description: file content
 */
import { ref, watch } from 'vue';

interface HandlerElement {
    (element?: HTMLDivElement): void
}

function useElement(handlerElement: HandlerElement) {
    const tableElRef = ref<ComponentRef>(null);

    const tableElWatch = watch(tableElRef, (element) => {
        handlerElement(element?.$el);
    });

    return {
        tableElRef,
        tableElWatch
    }
}

export default useElement;