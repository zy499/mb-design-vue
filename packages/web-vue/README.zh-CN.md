<div align="center">
  <a href="https://mb.design" target="_blank">
    <img alt="Mb Design Logo" width="200" src="https://avatars.githubusercontent.com/u/64576149?s=200&v=4"/>
  </a>
</div>

<div align="center">
  <h1>Mb Design</h1>
</div>

<div align="center">

基于 [Mb Design](https://mb.design/) 的 Vue UI 组件库。

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mb-design/mb-design-vue/blob/main/LICENSE)

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

# 特性

## 全面

60多个开箱即用的高质量组件, 可以覆盖绝大部份的业务场景。

## 主题配置

海量的样式 tokens, 支持全局以及组件级别的主题配置。有以下2种方式可以定制主题：

* [Less-loader](https://mb.design/vue/docs/theme)
* [风格配置平台](https://mb.design/themes) - 推荐!

## TypeScript 友好

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装

[npm package](https://www.npmjs.com/package/@mb-design/web-vue)

```bash
// npm
npm install @mb-design/web-vue

// yarn
yarn add @mb-design/web-vue
```

# 例子

```typescript
import { createApp } from 'vue'
import MbVue from '@mb-design/web-vue';
import App from './App.vue';
import '@mb-design/web-vue/dist/mb.css';

const app = createApp(App);
app.use(MbVue);
app.mount('#app');
```

## 开发

1. 使用 `npm install -g` 安装 `lerna` 和 `yarn` 等基础包

2. 使用 `yarn install` 安装 `workspaces` 中各个包的依赖（如果遇到 `YN0018` 错误，可以使用 `YARN_CHECKSUM_BEHAVIOR=update yarn` 进行安装）

3. 使用 `npm run init` 初始化项目


# 相关链接

* [官网](https://mb.design/)
* [暗黑模式](https://mb.design/vue/docs/dark)
* [主题配置](https://mb.design/vue/docs/theme)
* [Figma 设计资源](https://www.figma.com/file/FVu1DydEeXvJqXrkOb90Oi/MbDesign%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1_2.0?node-id=5472%3A308)
* [Awesome Mb](https://github.com/mb-design/awesome-mb)

# 生态

| 项目               | 介绍                                             |
| --------------------- | ------------------------------------------------------- |
| [React 组件库] | 基于 [Mb Design](https://mb.design/) 的 React UI 组件库。 |
| [风格配置平台] | 精确到组件级的主题视觉配置平台 |
| [物料平台] | 丰富可共享的业务定制物料，让效率突破猛进 |
| [图标平台] | 一站式图标管理平台 |
| [Mb Pro] | 快速构建中后台的前端解决方案 |

[React 组件库]: https://mb.design/react/docs/start
[风格配置平台]: https://mb.design/themes
[物料平台]: https://mb.design/material
[图标平台]: https://mb.design/iconbox
[Mb Pro]: https://mb.design/pro/

# 参与贡献

贡献之前请先阅读 [行为准则](./CODE_OF_CONDUCT.md) 和 [贡献指南](./CONTRIBUTING.zh-CN.md)。

---
### 示范

## 1.0.0

`2022-06-15`

### 🐛 问题修复

- **table:** 修复 align='left' 时表头居中的问题 ([#1278](https://github.com/arco-design/arco-design-vue/pull/1278))

### 💎 功能优化

- **table:** 无展开按钮时不再显示缩进 ([#1278](https://github.com/mb-design/mb-design-vue/pull/1278))
  
### 💅 样式更新

- **space:** 仅在横向模式使用 flex 布局的 item ([#1277](https://github.com/mb-design/mb-design-vue/pull/1277))
  
### ⚠️ 重点注意

- **table:** 由于功能需要，`mb-table-cell` 改为 flex 布局，且在表格内容外新增 `mb-table-td-content`  包裹层，如有自定义样式请留意 DOM 结构的改变 ([#1248](https://github.com/mb-design/mb-design-vue/pull/1248))
  
### 🆕 新增功能

- **table:** 增加 `sticky-header` 表头吸顶功能 ([#1248](https://github.com/mb-design/mb-design-vue/pull/1248))
- **table:** 表格列配置增加 `summaryCellStyle` 属性 ([#1248](https://github.com/mb-design/mb-design-vue/pull/1248))

### 🆎 类型修正

- 修正全部组件事件相关 TS 类型 ([#1160](https://github.com/mb-design/mb-design-vue/pull/1160))
---

感谢所有为 MbDesign 做过贡献的人!


- **table:** 无展开按钮时不再显示缩进 ([#1278](https://github.com/arco-design/arco-design-vue/pull/1278))

<a href="https://github.com/arco-design/arco-design-vue/graphs/contributors"><img src="https://contrib.rocks/image?repo=arco-design/arco-design-vue" /></a>

# License

[MIT 协议](./LICENSE)
