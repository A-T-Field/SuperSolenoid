/*
 * @Author: maggot-code
 * @Date: 2021-12-17 17:01:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:51:30
 * @Description: file content
 */
import type { VoidFieldSetupProps } from '../types/Props';

import { h } from "vue";
import { useRender } from '../hooks/use-render';
import { NGrid, NGridItem } from '@/plugins/naive-ui';

const setupGrid = (props: VoidFieldSetupProps) => {
    const { vesselProps } = props.model;

    const gridItem = useRender(props.children).map(item => {
        return h(NGridItem, { ...item.props.model.vesselProps }, {
            default: () => item
        });
    });

    console.log(vesselProps);

    return h(
        <NGrid {...vesselProps}>
            {{
                default: () => gridItem
            }}
        </NGrid>
    )
};

const VoidField = (props: VoidFieldSetupProps) => {
    const { vessel } = props.model;

    if (vessel === "Grid") return setupGrid(props);

    return h(
        <div>
            <h1>void field</h1>
        </div>
    );
}

export default VoidField;