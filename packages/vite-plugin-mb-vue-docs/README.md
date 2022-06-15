# `@mb-design/vite-plugin-mb-vue-docs`

Provides Markdown to Vue Component in Mb Vue Docs

## Usage

```tsx
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDocs from '@mb-design/vite-plugin-mb-vue-docs';

export default defineConfig({
  plugins: [vueDocs(), vue()],
});
```
