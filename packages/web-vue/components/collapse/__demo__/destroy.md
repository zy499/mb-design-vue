```yaml
title:
  zh-CN: 隐藏时销毁
  en-US: Destroy On Hide
```

## zh-CN

通过设置 `destroy-on-hide` 可以让面板内容在隐藏时销毁。

---

## en-US

By setting `destroy-on-hide` the panel contents can be destroyed when hidden.

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]" destroy-on-hide>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="1">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." :key="2">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="3" :show-expand-icon="false">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
