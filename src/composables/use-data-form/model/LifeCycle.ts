/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:26:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 15:07:20
 * @Description: file content
 */
class LifeCycle {
    displayName = "LifeCycle";

    constructor() { }

    onMount = () => {
        console.log('on mount');
    }

    onUnmount = () => {
        console.log('on unmount');
    }
}

export {
    LifeCycle
}