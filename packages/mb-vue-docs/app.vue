<template>
  <div class="mb-vue-site">
    <Navbar />
    <div
      :class="['mb-vue-body', { 'mb-vue-body-has-notice': showGlobalNotice }]"
    >
      <aside-nav :show="showNav" @button-click="toggleNav" />
      <router-view />
    </div>
    <a-back-top :style="{ right: '70px', bottom: '80px' }">
      <a-button class="site-backtop-btn" shape="circle" size="large">
        <icon-up />
      </a-button>
    </a-back-top>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { collapseInjectionKey } from './context';
import Navbar from './components/navbar/index.vue';
import AsideNav from './components/aside-nav/index.vue';
import { getLocalStorage, setLocalStorage } from './utils/local-storage';

export default defineComponent({
  name: 'App',
  components: {
    AsideNav,
    Navbar,
  },
  setup(props) {
    const showNav = ref(true);
    const showAnchor = ref(true);
    const showGlobalNotice = ref(
      getLocalStorage('mb-global-notice') !== '23-hide'
    );

    const handleCloseGlobalNotice = () => {
      showGlobalNotice.value = false;
      setLocalStorage('mb-global-notice', '23-hide');
    };

    const toggleNav = () => {
      showNav.value = !showNav.value;
    };

    const toggleAnchor = () => {
      showAnchor.value = !showAnchor.value;
    };

    provide(
      collapseInjectionKey,
      // @ts-ignore
      reactive({
        showNav,
        showAnchor,
        toggleNav,
        toggleAnchor,
      })
    );

    return {
      showNav,
      toggleNav,
      showGlobalNotice,
      handleCloseGlobalNotice,
    };
  },
});
</script>

<style lang="less" src="./style/index.less" />
