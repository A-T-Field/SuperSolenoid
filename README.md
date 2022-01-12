# 类型定义

## Schema

```json
{
    "url":"表单提交地址",
    "method":"表单数据提交方式 [ POST | GET ] <POST>",
    "format":"表单数据格式化 [ json | formData ] <json>",
    "submitValidate":"提交时是否需要校验 [ true | false ] <true>",
    "$schema":[
        {
            "type":"用来做数据的类型校验参数 [ string | number | boolean | null | undefined | array | object ] <undefined>",
            "parent":"父节点关键字(如果没有父节点可以忽略该属性，或者写入 [ null | root ]) [ string | number ] <string>",
            "keyword":"关键字，表单数据项唯一标识，如果出现重复则会使用第一次出现的属性忽略所有后续重复的属性(并且禁止使用 root 作为关键字，如果发现会直接忽略整个表单项) [ string | number ] <string>",
            "value":"数据值(类型根据 type 来决定，如果不符合则会根据 type 设置对应类型的空值)",
            "defaultValue":"数据默认值(类型根据 type 来决定，如果不符合则会根据 type 设置对应类型的空值)",
            "dataSource":[
                {
                    "type":"用来做数据的类型校验参数 [ string | number | boolean | null | undefined ]<undefined>",
                    "label":"描述(数据源主要用来承载 下拉框、检索框、单选框、多选框所需要的列表选项等数据，常见的也会被联动规则进行异步替换) <string>",
                    "value":"数据值(类型根据 type 来决定，如果不符合则会根据 type 设置对应类型的空值)",
                    "children":"dataSource",
                    "extra":"扩展数据源(该属性不会被使用或修改，主要用来承载后端需要自控自检的一些数据)"
                }
            ],
            "display":"展示状态 [ visable | hidden ] <vissable>",
            "interact":"交互状态 [ modify | preview | disable ] <modify>",
            "title":"关键字描述 string",
            "explain":"说明内容 string",
            "tips":"提示内容 string",
            "prefix":"前缀内容 string",
            "suffix":"后缀内容 string",
            "beforePrefix":"前缀之前的内容 string",
            "afterSuffix":"后缀之后的内容 string",
            "void":"用来标识该表单项是否为虚拟字段 [ true | false ] <true>",
            "required":"用来标识该表单项是否必填(如果 void 为 true 则会忽略该属性) [ true | false ] <false>",
            "sort":"排序数值(由于 schema 会被整理为树，sort 的作用域只会在自己那一层中生效，所以可以定义重复的值) number",
            "componentType":"表单项类型(如果 void 为 true 则会忽略该属性) string <unknow>",
            "componentProps":"表单项属性(如果 void 为 true 则会忽略该属性) object <{}>",
            "vesselType":"容器项类型 string <unknow>",
            "vesselProps":"容器项属性 object <{}>",
            "$action":[
                {
                    "async":"用来标识该联动是否为异步联动(目前如果使用异步联动方式会单独将依赖的整个表单项作为参数提交) [ true | false ] <false>",
                    "depend":"依赖关键字(可以是路径) [ string | array<string> ] <string>",
                    "condition":"条件表达式",
                    "url":"异步联动交换数据的地址(async 为 false 时会忽略该属性)",
                    "method":"异步联动交换数据的请求方式(async 为 false 时会忽略该属性) [ GET | POST ] <GET>",
                    "format":"异步联动交换数据格式化方式(async 为 false 时会忽略该属性) [ json | formData ] <json>"
                }
            ]
        }
    ]
}
```

## 路径类型

```json
{
    "address":"完整的路径地址",
    "section":"完整路径的切片数据",
    "isParent":"是否存在父级",
    "isChildren":"是否存在子级",
    "level":"深度"
}
```

## 表达式描述

```typescript
// $self.dataSource = @request("/atf/get","GET",$deps[0].value).data.context

// $ : 特殊指针标识符号 [ $self | $deps | $values ]
// @ : 方法调用标识符号 [ @request ]
// . : 属性连接符号
// [ : 下标开始标识符号
// ] : 下标结束标识符号
// ( : 函数调用开始标识符号
// ) : 函数调用结束标识符号
// , : 参数隔断标识符号
// " : 字符串开始标识符号(找到下一个相同符号表示字符串结束)
// ' : 字符串开始标识符号(找到下一个相同符号表示字符串结束)
// = : 赋值标识符号
// > : 大于标识符号
// >= : 大于等于标识符号
// < : 小于标识符号
// <= : 小于等于标识符号
// ! : 取反标识符号

// + : 加法标识符号
// - : 减法标识符号
// * : 乘法标识符号
// / : 除法标识符号
// % : 取余标识符号
```

