/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:56:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:42:11
 * @Description: file content
 */
class LifeCycle {
    onMount = () => {
        console.log('form mount');
    }
    onUnmount = () => {
        console.log('form unmount');
    }
}

export {
    LifeCycle
}