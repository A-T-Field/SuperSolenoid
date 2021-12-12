/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:42:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:05:55
 * @Description: file content
 */
import type { Ref } from 'vue';
import type {
    DisplayType,
    SizeType,
    PositionType,
    AlignType,
    InteractType,
    OptionsType,
} from '../type/public';

import { unref, ref, computed } from 'vue';
import { uid } from '@/utils/uid';
import { default as LifeCycle } from './LifeCycle';

class Share extends LifeCycle {
    protected _designID: string = uid();
    protected _loading: Ref<boolean> = ref(false);
    protected _showColon: Ref<boolean> = ref(false);
    protected _showLabel: Ref<boolean> = ref(false);
    protected _showFeedback: Ref<boolean> = ref(false);
    protected _showRequireMark: Ref<boolean> = ref(false);
    protected _size: Ref<SizeType> = ref("large");
    protected _display: Ref<DisplayType> = ref("hidden");
    protected _interact: Ref<InteractType> = ref("disable");
    protected _labelWidth: Ref<number> = ref(120);
    protected _labelPlacement: Ref<PositionType> = ref("left");
    protected _labelAlign: Ref<AlignType> = ref("right");
    protected _requireMarkPlacement: Ref<AlignType> = ref("left");

    protected defaultOptions(options: Partial<OptionsType>) {
        this._loading.value = options.loading ?? false;
        this._showColon.value = options.showColon ?? true;
        this._showLabel.value = options.showLabel ?? true;
        this._showFeedback.value = options.showFeedback ?? true;
        this._showRequireMark.value = options.showRequireMark ?? true;
        this._size.value = options.size ?? "large";
        this._display.value = options.display ?? "visable";
        this._interact.value = options.interact ?? "modify";
        this._labelWidth.value = options.labelWidth ?? 120;
        this._labelPlacement.value = options.labelPlacement ?? "left";
        this._labelAlign.value = options.labelAlign ?? "right";
        this._requireMarkPlacement.value = options.requireMarkPlacement ?? "left";
    }

    get options() {
        return computed(() => {
            return {
                loading: this.loading,
                showColon: this.showColon,
                showLabel: this.showLabel,
                showFeedback: this.showFeedback,
                showRequireMark: this.showRequireMark,
                size: this.size,
                display: this.display,
                interact: this.interact,
                labelWidth: this.labelWidth,
                labelPlacement: this.labelPlacement,
                labelAlign: this.labelAlign,
                requireMarkPlacement: this.requireMarkPlacement
            }
        })
    }
    get loading() {
        return unref(this._loading);
    }
    get showColon() {
        return unref(this._showColon);
    }
    get showLabel() {
        return unref(this._showLabel);
    }
    get showFeedback() {
        return unref(this._showFeedback);
    }
    get showRequireMark() {
        return unref(this._showRequireMark);
    }
    get size() {
        return unref(this._size);
    }
    get display() {
        return unref(this._display);
    }
    get interact() {
        return unref(this._interact);
    }
    get isModify() {
        return this.interact === 'modify';
    }
    get isPreview() {
        return this.interact === 'preview';
    }
    get isDisable() {
        return this.interact === 'disable';
    }
    get labelWidth() {
        return unref(this._labelWidth);
    }
    get labelPlacement() {
        return unref(this._labelPlacement);
    }
    get labelAlign() {
        return unref(this._labelAlign);
    }
    get requireMarkPlacement() {
        return unref(this._requireMarkPlacement);
    }

    set loading(state: boolean) {
        this._loading.value = state;
    }
    set showColon(state: boolean) {
        this._showColon.value = state;
    }
    set showLabel(state: boolean) {
        this._showLabel.value = state;
    }
    set showFeedback(state: boolean) {
        this._showFeedback.value = state;
    }
    set showRequireMark(state: boolean) {
        this._showRequireMark.value = state;
    }
    set size(type: SizeType) {
        this._size.value = type;
    }
    set display(type: DisplayType) {
        this._display.value = type;
    }
    set interact(type: InteractType) {
        this._interact.value = type;
    }
    set labelWidth(width: number) {
        this._labelWidth.value = width;
    }
    set labelPlacement(type: PositionType) {
        this._labelPlacement.value = type;
    }
    set labelAlign(type: AlignType) {
        this._labelAlign.value = type;
    }
    set requireMarkPlacement(type: AlignType) {
        this._requireMarkPlacement.value = type;
    }
};

export default Share;