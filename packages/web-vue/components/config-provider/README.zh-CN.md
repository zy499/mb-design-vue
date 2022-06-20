```yaml
meta:
  type: 组件
  category: 通用
title: 全局配置 ConfigProvider
description: 在应用的最外层进行配置，一次设置，全局生效。一般用于设置国际化语言等功能。
```

@import ./__demo__/basic.md

@import ./__demo__/empty.md

## API


### `<config-provider>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|prefix-cls|组件类名前缀|`string`|`'mb'`|
|locale|配置语言包|`MbLang`|`-`|
|size|大小|`Size`|`-`|
|global|是否全局生效|`boolean`|`false`|
|update-at-scroll|是否在容器滚动时更新弹出框的位置|`boolean`|`false`|
### `<config-provider>` Slots

|插槽名|描述|参数|
|---|:---:|---|
|loading|自定义加载中元素|-|
|empty|自定义空状态元素|-|




## FAQ

### 全局配置

`global` 属性设置为 `true` 时，会将配置内容注入到 Vue AppContext 中，一般用于解决使用 Modal、Message 组件的函数式调用方法时，配置内容无法生效的问题。
