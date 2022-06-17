```yaml
title:
  zh-CN: 无边框模式
  en-US: Border less
```

## zh-CN

通过设置 `bordered="false"` 隐藏边框。

---

## en-US

Hide the border by setting `bordered="false"`.

---

```vue
<template>
  <a-collapse :default-active-key="['1']" :bordered="false">
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="1">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="2" disabled>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="3">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
