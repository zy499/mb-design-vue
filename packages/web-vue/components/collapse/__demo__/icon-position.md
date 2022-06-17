```yaml
title:
  zh-CN: 展开图标位置
  en-US: Expand icon position
```

## zh-CN

通过 `expand-icon-position` 属性设置展开图标的位置。

---

## en-US

Set the position of the expanded icon through the `expand-icon-position` property.

---

```vue
<template>
  <a-space direction="vertical" :style="{width:'100%'}">
    <a-radio-group type="button" v-model="position">
      <a-radio value="left">Left</a-radio>
      <a-radio value="right">Right</a-radio>
    </a-radio-group>
    <a-collapse :default-active-key="['1']" :expand-icon-position="position">
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
  </a-space>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const position = ref('left');

    return {
      position
    }
  },
}
</script>
```
