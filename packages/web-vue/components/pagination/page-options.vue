<template>
  <span :class="prefixCls">
    <mb-select
      :model-value="pageSize"
      :options="options"
      :size="size"
      :disabled="disabled"
      v-bind="selectProps"
      @change="handleChange"
    />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useI18n } from '../locale';
import { getPrefixCls } from '../_utils/global-config';
import MbSelect from '../select';

export default defineComponent({
  name: 'PageOptions',
  components: {
    MbSelect,
  },
  props: {
    sizeOptions: {
      type: Array,
      required: true,
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String,
    },
    onChange: {
      type: Function as PropType<(value: number) => void>,
    },
    selectProps: {
      type: Object,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('pagination-options');
    const { t } = useI18n();
    const options = computed(() =>
      props.sizeOptions.map((value) => ({
        value,
        label: `${value} ${t('pagination.countPerPage')}`,
      }))
    );

    const handleChange = (value: string) => {
      emit('change', value);
    };

    return {
      prefixCls,
      options,
      handleChange,
    };
  },
});
</script>
