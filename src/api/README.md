# 说明

## 1. 登录

### 请求地址：

* `[http|https]://test.mock.com/[api]/login`

### 请求方式：

* **POST**

### 参数：

| 参数名   | 类型   | 方式 | 必选 | 说明       |
| -------- | ------ | ---- | ---- | ---------- |
| username | string | DATA | 是   | 登录用户名 |
| password | string | DATA | 是   | 登录密码   |

### 返回示例：

```json
{
    "code":0,
    "message":"ok",
    "context":{}
}
```

----

## 2. 获取权限

### 请求地址：

* `[http|https]://test.mock.com/[api]/power`

### 请求方式：

* **GET**

### 参数：

| 参数名 | 类型   | 方式   | 必选 | 说明     |
| ------ | ------ | ------ | ---- | -------- |
| token  | string | HEADER | 是   | 用户签名 |

### 返回示例：

```json
{
    "code":0,
    "message":"ok",
    "context":["worker","leader"]
}
```

---

## 3. 获取路由

### 请求地址：

* `[http|https]://test.mock.com/[api]/routing`

### 请求方式：

* **POST**

### 参数：

| 参数名 | 类型     | 方式   | 必选 | 说明     |
| ------ | -------- | ------ | ---- | -------- |
| token  | string   | HEADER | 是   | 用户签名 |
| power  | [string] | DATA   | 是   | 用户权限 |

### 返回示例：

```json
{
    "code":0,
    "message":"ok",
    "context":[
        {
            "name":"form",
            "path":"/form",
            "redirect":"/form/hand",
            "meta":{
                "async":true,
                "view":"home-page",
                "title":"表单",
                "isMenuRoute":true,
                "hasPower":true
            },
            "children":[
                {
                    "name": 'form_hand',
                    "path": '/form/hand',
                    "meta": {
                        "async": true,
                        "view": 'form-hand',
                        "parent": 'form',
                        "title": '表单-基础',
                        "isMenuRoute": true,
                    }
                },
                {
                    "name": 'form_schema',
                    "path": '/form/schema',
                    "meta": {
                        "async": true,
                        "view": 'form-schema',
                        "parent": 'form',
                        "title": '表单-搭建',
                        "isMenuRoute": true,
                    }
                }
            ]
        }
    ]
}
```

### 类型说明：

* **路由接口**

```typescript
interface BaseRouting {
    name:string; // 主键
    path:string; // 地址
    redirect?:string; // 重定向地址
    meta?:RouteMeta; // 信息
    children?:Array<BaseRouting>; // 子路由
}
```

* 路由信息接口

```typescript
interface RouteMeta {
    async?:boolean; // 标识是否为动态路由
    view?:string; // 视图名称
    parent?:string; // 父节点主键
    title?:string; // 标题
    isDisabled?:boolean; // 是否禁用
    isKeepAlive?:boolean; // 是否缓存
    isNavRoute?:boolean; // 是否作用在导航
    navActive?:string; // 导航标识
    isMenuRoute?:boolean; // 是否作用菜单
    menuActive?:string; // 菜单标识
    hasPower?:boolean; // 是否需要权限
    hasChildPower?:boolean; // 是否限制子路由权限 （如果父节点 hasPower 为 true，则忽略该设置一律为 true）
    hasSort?:boolean; // 是否排序
    sort?:number; // 排序值
    useFrameSrc?:boolean; // 是否使用外部链接
    frameSrc?:string; // 外部链接地址
    [key:string]:any; // 额外属性
}
```

---

## 4. 获取表格表头

### 请求地址：

* `[http|https]://test.mock.com/[api]/table/columns`

### 请求方式：

* **GET**

### 参数：

| 参数名 | 类型   | 方式   | 必选 | 说明     |
| ------ | ------ | ------ | ---- | -------- |
| token  | string | HEADER | 是   | 用户签名 |

### 返回示例：

```json
{
    "code":0,
    "message":"ok",
    "context":{
        "columns":[
            {
                "key": "name",
                "title": "姓名",
                "sortName": "sortName",
                "align": "center",
                "isSort": true,
                "mode": "button"
            },
            {
                "key": "date",
                "title": "日期"
            },
            {
                "key": "time",
                "title": "时间",
                "isSort": true
            }
        ]
    }
}
```

### 类型说明：

* 表格列接口

```typescript
interface BaseTableColumn {
    key:string;
    mode?:TableRowMode;
    title?:string;
    align?:"center" | "left" | "right";
    isSort?:boolean;
    sortName?:string;
}
```

----

## 5. 获取表格数据

### 请求地址：

* `[http|https]://test.mock.com/[api]/table`

### 请求方式：

* **GET**

### 参数：

| 参数名 | 类型   | 方式   | 必选 | 说明     |
| ------ | ------ | ------ | ---- | -------- |
| token  | string | HEADER | 是   | 用户签名 |

### 返回示例：

```json
{
    "code":0,
    "message":"ok",
    "context":{
        "data":[]
    }
}
```

-----





