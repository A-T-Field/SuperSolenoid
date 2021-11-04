/*
 * @Author: maggot-code
 * @Date: 2021-11-03 17:38:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-04 16:58:08
 * @Description: file content
 */
interface TreeProps {
    children?: Array<any>,
    [key: string]: any
}
interface TreeEachCallBack<N> {
    (node: N, parentNode?: N, index?: number, data?: Array<N>): N
}
interface TreeEach {
    <N extends TreeProps>(cb: TreeEachCallBack<N>, tree: Array<N>, parentNode?: N): Array<N>
}

export const treeEach: TreeEach = (cb, tree, parentNode) => {
    return tree.map((node, index, data) => {
        const useParent = cb(node, parentNode, index, data);

        const { children } = useParent;

        if (children && children.length > 0) {
            useParent.children = treeEach(cb, children, useParent);
        }

        return useParent;
    });
}