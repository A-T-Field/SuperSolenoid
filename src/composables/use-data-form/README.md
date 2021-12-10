# 表单

## 属性

| 属性名                 | 描述               | 值类型          | 可选值                   | 默认值    | 是否为扩展 | 是否用于外部属性 |
| ---------------------- | ------------------ | --------------- | ------------------------ | --------- | ---------- | ---------------- |
| `display`              | 表单展示方式       | `string`        | `visable,hidden`         | `visable` | 是         | 是               |
| `interact`             | 表单交互方式       | `string`        | `modify,preview,disable` | `modify`  | 是         | 是               |
| `loading`              | 表单加载状态       | `boolean`       | `true,false`             | `false`   | 是         | 是               |
| `showColon`            | 是否展示冒号       | `boolean`       | `true,false`             | `true`    | 是         | 是               |
| `disabled`             | 是否禁用表单       | `boolean`       | `true,false`             | `false`   | 否         | 是               |
| `inline`               | 是否展示为行内表单 | `boolean`       | `true,false`             | `false`   | 否         | 是               |
| `labelWidth`           | 表单标签宽度       | `number,string` |                          | 120       | 否         | 是               |
| `labelAlign`           | 表单标签对齐方式   | `string`        | `left,right`             | `left`    | 否         | 是               |
| `labelPlacement`       | 表单标签展示位置   | `string`        | `left,top`               | `left`    | 否         | 是               |
| `showFeedback`         | 是否展示校验反馈   | `boolean`       | `true,false`             | `true`    | 否         | 是               |
| `showLabel`            | 是否展示标签       | `boolean`       | `true,false`             | `true`    | 否         | 是               |
| `showRequireMark`      | 是否展示必填星号   | `boolean`       | `true,false`             | `true`    | 否         | 是               |
| `requireMarkPlacement` | 必填星号位置       | `string`        | `left,right`             | `left`    | 否         | 是               |
| `size`                 | 表单尺寸           | `string`        | `small,medium,large`     | `large`   | 否         | 是               |
| `initialValues`        | 表单项初始值       | `object`        |                          | `{}`      | 是         | 否               |
| `values`               | 表单项数据值       | `object`        |                          | `{}`      | 是         | 否               |
| `fields`               | 表单项集合         | `object`        |                          | `{}`      | 是         | 否               |

------

# 表单项容器

## 属性

| 属性名                 | 描述                     | 值类型          | 可选值                       | 默认值    | 是否为扩展 | 是否用于外部属性 |
| ---------------------- | ------------------------ | --------------- | ---------------------------- | --------- | ---------- | ---------------- |
| `display`              | 容器展示方式             | `string`        | `visable,hidden`             | `visable` | 是         | 是               |
| `interact`             | 容器交互方式             | `string`        | `modify,preview,disable`     | `modify`  | 是         | 是               |
| `loading`              | 容器加载状态             | `boolean`       | `true,false`                 | `false`   | 是         | 是               |
| `showColon`            | 是否展示冒号             | `boolean`       | `true,false`                 | `true`    | 是         | 是               |
| `labelWidth`           | 容器标签宽度             | `number,string` |                              | 120       | 否         | 是               |
| `labelAlign`           | 容器标签对齐方式         | `string`        | `left,right`                 | `left`    | 否         | 是               |
| `labelPlacement`       | 容器标签展示位置         | `string`        | `left,top`                   | `left`    | 否         | 是               |
| `showFeedback`         | 是否展示校验反馈         | `boolean`       | `true,false`                 | `true`    | 否         | 是               |
| `showLabel`            | 是否展示标签             | `boolean`       | `true,false`                 | `true`    | 否         | 是               |
| `showRequireMark`      | 是否展示必填星号         | `boolean`       | `true,false`                 | `true`    | 否         | 是               |
| `requireMarkPlacement` | 必填星号位置             | `string`        | `left,right`                 | `left`    | 否         | 是               |
| `size`                 | 容器尺寸                 | `string`        | `small,medium,large`         | `large`   | 否         | 是               |
| `feedback`             | 反馈信息可以覆盖校验结果 | `string`        |                              |           | 否         | 否               |
| `first`                | 只展示首个出错信息       | `boolean`       | `true,false`                 | `false`   | 否         | 是               |
| `ignorePathChange`     |                          | `boolean`       | `false`                      | `false`   | 否         | 否               |
| `label`                | 标签内容                 | `string`        |                              | `{name}`  | 否         | 是               |
| `name`                 | 关键字                   | `string`        |                              | 必填      | 是         | 是               |
| `mode`                 | 表单项类型               | `string`        | `ModeType`                   | `unknow`  | 是         | 是               |
| `component`            | 表单项组件               | `array`         | `[component,componentProps]` | `[]`      | 是         | 是               |
| `path`                 | 对应表单数据路径         | `string`        |                              | `''`      | 否         | 否               |
| `initialValue`         | 初始值                   | `any`           |                              |           | 是         | 否               |
| `value`                | 数据值                   | `any`           |                              |           | 是         | 否               |

---

# 表单项类型 `(ModeType)`

-----

# JSON 格式

> 具体的`mode`属性地址在：[Naive UI](https://www.naiveui.com/zh-CN/dark/components/button)
>
> **定义`Naive UI`原生属性的时候需要在所有属性前加上`$`符号，并且所有属性名称需要是驼峰命名不能是文档中的横线分割单词（因为没做键名转换）**

```json
{
    "form":{
        ...表单属性
    },
    "schema":[
        {
            ...表单项容器属性,
            "mode":"input",
            "$clearable":true,
            "$maxlength":12,
            "$minlength":6,
            "$round":false,
            "$type":"password",
            "$showPasswordOn":"mousedown"
        },
        {
            ...表单项容器属性,
            "mode":"select",
            "$multiple":false,
            "$placeholder":"请选择内容!",
            "$options":[
                {
                    "label":"选项1",
                    "value":11
                },
                {
                    "label":"选项2",
                    "value":22
                }
            ]
        }
    ]
}
```

----

