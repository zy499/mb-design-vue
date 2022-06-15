<template>
  <nav class="mb-nav">
    <div class="mb-nav-logo">
      <logo-mb v-if="theme === 'light'" />
      <logo-mb-dark v-if="theme === 'dark'" />
    </div>
    <div class="mb-nav-right">
      <a-button class="mb-nav-button" type="text" @click="handleClickTheme">
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
import { defineComponent, ref } from 'vue';
import LogoMb from '../../assets/logo-mb-design.svg';
import LogoMbDark from '../../assets/logo-mb-design-dark.svg';
import { getLocalStorage, setLocalStorage } from '../../utils/local-storage';

const changeLanguage = (lang) => {
  if (lang === 'zh-CN' && /en-US/i.test(window.location.href)) {
    setLocalStorage('mb-lang', lang);
    window.location.href = window.location.href.replace(/en-US\//i, '');
  } else if (lang === 'en-US' && !/en-US/i.test(window.location.href)) {
    setLocalStorage('mb-lang', lang);
    window.location.href = window.location.href.replace('/vue', '/vue/en-US');
  }
};

const toggleTheme = (mode) => {
  if (mode === 'light') {
    document.body.setAttribute('mb-theme', 'light');
  } else if (mode === 'dark') {
    document.body.setAttribute('mb-theme', 'dark');
  }
  setLocalStorage('mb-theme', mode);
};
export default defineComponent({
  name: 'Navbar',
  components: {
    LogoMb,
    LogoMbDark,
  },
  setup() {
    const theme = ref(getLocalStorage('mb-theme'));
    const lang = ref(getLocalStorage('mb-lang'));

    const handleClickTheme = () => {
      if (theme.value === 'light') {
        theme.value = 'dark';
        toggleTheme('dark');
      } else {
        theme.value = 'light';
        toggleTheme('light');
      }
    };

    const handleClickLang = () => {
      if (lang.value === 'zh-CN') {
        changeLanguage('en-US');
      } else {
        changeLanguage('zh-CN');
      }
    };

    return { theme, toggleTheme, handleClickLang, lang, handleClickTheme };
  },
});
</script>

<style scoped lang="less" src="./style.less" />
