```yaml
meta:
  type: 开发指南
title: 快速上手
description: 跟随以下的步骤，快速上手组件库的使用。
```

## Vue 版本

vue >= 3.2.0

**注意**： `Vue3` 不支持IE浏览器环境，如果需要可以增加 `polyfill`。

## 安装

```shell
# npm
npm install --save-dev @mb-design/web-vue
# yarn
yarn add --dev @mb-design/web-vue
```

## 完整引入

```ts
import { createApp } from 'vue'
import MbVue from '@mb-design/web-vue';
import App from './App.vue';
import '@mb-design/web-vue/dist/mb.css';

const app = createApp(App);
app.use(MbVue);
app.mount('#app');
```

## 按需加载（模板）

如果使用模板方式进行开发，可以使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件来开启按需加载的支持。
插件会自动解析模板中的使用到的组件，并导入组件和对应的样式文件。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { MbResolver } from '@mb-design/web-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        MbResolver({
          sideEffect: true
        })
      ]
    })
  ]
});
```

注意：这种方法并不会处理用户在 script 中手动导入的组件，比如 Message 组件，用户仍需要手动导入组件对应的样式文件，例如 `@mb-design/web-vue/es/message/style/css.js`。

## 按需加载

也可以使用手动导入的方式按需加载组件，组件库已经默认支持 Tree Shaking。可以配合 [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) 插件自动加载组件样式。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@mb-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            // css
            return `@mb-design/web-vue/es/${name}/style/css.js`
            // less
            return `@mb-design/web-vue/es/${name}/style/index.js`
          },
        }
      ]
    })
  ]
})
```

## 全局配置
在引入 MbVue 时，可以传入一个全局配置对象。

```ts
import { createApp } from 'vue'
import MbVue from '@mb-design/web-vue';
import App from './App.vue';
import '@mb-design/web-vue/dist/mb.css';

const app = createApp(App);
app.use(MbVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'mb'
});
app.mount('#app');
```
