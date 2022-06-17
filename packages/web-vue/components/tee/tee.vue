<template>
  <div :class="prefixCls">测试组件Tee</div>
</template>
<script>
import { defineComponent } from 'vue';
import { getPrefixCls } from '../_utils/global-config';

export default defineComponent({
  name: 'Tee',
  setup() {
    const prefixCls = getPrefixCls('tee');

    return {
      prefixCls,
    };
  },
});
</script>
<style lang=""></style>
