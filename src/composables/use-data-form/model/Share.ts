/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:24:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:55:32
 * @Description: file content
 */
import type { ShareProps } from '../types/Share';

import { LifeCycle } from './LifeCycle';

class Share extends LifeCycle {
    constructor(props: ShareProps) {
        super();
        console.log(props);
    }
}

export {
    Share
}