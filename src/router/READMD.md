# 路由

```json
{
    "name":"string : 唯一标识，如果发现重复的会使用第一个出现的模块，忽略后续所有重复的模块(包括所有子路由)",
    "path":"string : 路由地址(完整的路径字符串)",
    "redirect":"string : 重定向路由地址(完整的路径字符串)",
    "meta":{
        "async":"boolean : 用来标识该路由为动态路由(必填默认是false)",
        "view":"string : 路由视图名称",
        "parent":"string : 父节点name，可以为空表示没有父节点",
        "title":"string : 路由标题内容",
        "isDisabled":"boolean : 是否禁用该路由(还是会显示出来但是无法使用)",
        "isKeepAlive":"boolean : 是否缓存该路由(如果为 true 则跳转之后再返回时会保留跳转前的所有信息)",
        "isMenuRoute":"boolean : 是否将该路由地址显示在菜单列表中(如果父级为 true 则所有子级也为 true)",
        "menuActive":"string : 菜单激活路由标识，默认会使用name属性",
        "hasPower":"boolean : 标识该路由是否需要满足权限才可以访问使用",
        "hasSort":"boolean : 是否需要对路由排序",
        "sort":"number : 排序值",
        "useFrameSrc":"boolean : 是否使用外部链接",
        "frameSrc":"string : 外部链接地址(完整的URL地址)"
    },
    "children":[]
}
```

