```yaml
title:
  zh-CN: 排序
  en-US: Order
```

## zh-CN

通过 `order` 来进行元素排序。

---

## en-US

Sort elements by `order`.

---

```vue
<template>
  <div>
    <a-row class="grid-demo">
      <a-col :span="6" :order="4">
        <div>1 col-order-4</div>
      </a-col>
      <a-col :span="6" :order="3">
        <div>2 col-order-3</div>
      </a-col>
      <a-col :span="6" :order="2">
        <div>3 col-order-2</div>
      </a-col>
      <a-col :span="6" :order="1">
        <div>4 col-order-1</div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.grid-demo .mb-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .mb-col:nth-child(2n) {
  background-color: rgba(var(--mbblue-6), 0.9);
}
.grid-demo .mb-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
```
