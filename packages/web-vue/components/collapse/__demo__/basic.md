```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

用于将复杂的内容区域分组和隐藏，可折叠或展开。默认可以展开多个面板。

---

## en-US

Used to group and hide complex content areas, and can be collapsed or expanded. Multiple panels can be expanded by default.

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]">
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." key="1">
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
      <div>Shanghai MaBang Technology Co., Ltd.</div>
    </a-collapse-item>
    <a-collapse-item header="Shanghai MaBang Technology Co., Ltd." :key="2" disabled>
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
