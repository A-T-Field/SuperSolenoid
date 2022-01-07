/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 10:55:44
 * @Description: file content
 */
import { Ref, unref } from 'vue';
import type { ElementComponent } from '../types/share';
import type { BaseFieldProps } from '../types/field';

import { ref, computed } from 'vue';
import { uid } from '../utils/uid';
import { Share } from './Share';

class BaseField extends Share {
    designID = uid();
    parent: string | number;
    keyword: string | number;
    address: string;

    protected selfHasVoid: boolean;
    protected selfRequired: Ref<boolean>;
    protected selfSort: Ref<number>;
    protected selfVesselType: ElementComponent;
    protected selfVesselProps: Record<string, any>;

    constructor(props: BaseFieldProps) {
        super();

        this.parent = props.parent ?? uid();
        this.keyword = props.keyword ?? uid();
        this.address = props.address ?? "";
        this.selfHasVoid = props.hasVoid ?? true;
        this.selfRequired = ref(props.required ?? false);
        this.selfSort = ref(props.sort ?? 0);
        this.selfVesselType = props.vesselType;
        this.selfVesselProps = props.vesselProps ?? {};

        this.setDisplay(props.display ?? "vissable");
        this.setInteract(props.interact ?? "modify");
    }

    get vessel() {
        return unref(computed(() => {
            return [this.selfVesselType, this.selfVesselProps];
        }));
    }
    set vesselType(type: ElementComponent) {
        this.selfVesselType = type;
    }
    set vesselProps(props: Record<string, any>) {
        this.selfVesselProps = props;
    }
}

export {
    BaseField
}