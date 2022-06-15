import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import MbVue, { addI18nMessages, useLocale } from '@web-vue/components/index';
import MbVueIcon from '@web-vue/components/icon';
import enUS from '@web-vue/components/locale/lang/en-us';
// import renderNavBar from '@mb-design/mb-vue-docs-navbar';
import packages from '@web-vue/package.json';
import router from './router';
import locale from './locale';
import App from './app.vue';
import MbArticle from './components/article/index.vue';
import AnchorHead from './components/anchor-head/index.vue';
import CodeBlock from './components/code-block/index.vue';
import CellDemo from './components/cell-demo/index.vue';
import CellCode from './components/cell-code/index.vue';
import 'prismjs/themes/prism.css';
import 'nprogress/nprogress.css';
import '@web-vue/components/index.less';
// import '@mb-design/mb-vue-docs-navbar/dist/style.css';
import { getLocalStorage, setLocalStorage } from './utils/local-storage';
import { checkLogin } from './utils/login';

let theme = getLocalStorage('mb-theme') ?? '';
if (!theme) {
  theme = 'light';
  setLocalStorage('mb-theme', theme);
}
const lang = /en-US/i.test(window.location.href) ? 'en-US' : 'zh-CN';
setLocalStorage('mb-lang', lang);

const handleLanguageChange = (lang: string) => {
  if (lang === 'zh-CN' && /en-US/i.test(window.location.href)) {
    setLocalStorage('mb-lang', lang);
    window.location.href = window.location.href.replace(/en-US\//i, '');
  } else if (lang === 'en-US' && !/en-US/i.test(window.location.href)) {
    setLocalStorage('mb-lang', lang);
    window.location.href = window.location.href.replace('/vue', '/vue/en-US');
  }
};

// Ensure that localStorage and URL are consistent
handleLanguageChange(lang);

checkLogin().then(() => {
  // try {
  //   renderNavBar({
  //     version: packages.version,
  //     lang,
  //     handleLanguageChange,
  //   });
  // } catch (e) {
  //   // eslint-disable-next-line no-console
  //   console.error(e);
  // }

  const i18n = createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: 'zh-CN',
    messages: locale,
  });

  addI18nMessages({ 'en-US': enUS });

  if (lang === 'en-US') {
    useLocale(lang);
  }

  const app = createApp(App, {
    theme,
    language: lang,
  });
  app.use(MbVue);
  app.use(MbVueIcon);
  app.use(router);
  app.use(i18n);
  app.component(CodeBlock.name, CodeBlock);
  app.component(CellDemo.name, CellDemo);
  app.component(CellCode.name, CellCode);
  app.component(AnchorHead.name, AnchorHead);
  app.component(MbArticle.name, MbArticle);
  app.mount('#root');
});
