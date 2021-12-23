/*
 * @Author: maggot-code
 * @Date: 2021-12-20 00:00:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 14:44:51
 * @Description: file content
 */
import { usePackage } from '../hooks/use-package';

import Unknow from "./Unknow";
import Grid from "./Grid";
import FormItemGi from './FormItemGi';
import FormItem from "./FormItem";
import Input from './Input';
import Select from './Select';

export default usePackage([
    ["Unknow", Unknow],
    ["Grid", Grid],
    ["FormItemGi", FormItemGi],
    ["FormItem", FormItem],
    ["Input", Input],
    ["Select", Select]
]);