<template>
  <nav class="mb-nav">
    <div class="mb-nav-logo">
      <logo-mb v-if="theme === 'light'" />
      <logo-mb-dark v-if="theme === 'dark'" />
    </div>
    <div class="mb-nav-right">
      <a-button class="mb-nav-button" type="text" @click="toggleTheme">
        <template #icon>
          <icon-moon-fill v-if="theme === 'light'" />
          <icon-sun-fill v-if="theme === 'dark'" />
        </template>
      </a-button>
      <a-button class="mb-nav-button" type="text" @click="handleClickLang">
        <template #icon>
          <div v-if="lang === 'en-US'">中</div>
          <div v-if="lang === 'zh-CN'">En</div>
        </template>
      </a-button>
    </div>
  </nav>
</template>

<script>
import { defineComponent, inject } from 'vue';
import LogoMb from '../../assets/logo-mb-design.svg';
import LogoMbDark from '../../assets/logo-mb-design-dark.svg';

export default defineComponent({
  name: 'Navbar',
  components: {
    LogoMb,
    LogoMbDark,
  },
  setup() {
    const theme = inject('theme');
    const toggleTheme = inject('toggleTheme');
    const lang = inject('lang');
    const changeLanguage = inject('changeLanguage');

    const handleClickLang = () => {
      if (lang.value === 'zh-CN') {
        changeLanguage('en-US');
      } else {
        changeLanguage('zh-CN');
      }
    };

    return { theme, toggleTheme, lang, handleClickLang };
  },
});
</script>

<style scoped lang="less" src="./style.less" />
