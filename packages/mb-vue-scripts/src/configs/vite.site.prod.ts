import path from 'path';
import { defineConfig, InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDocs from '@mb-design/vite-plugin-mb-vue-docs';
import svgLoader from 'vite-svg-loader';
import paths from '../utils/paths';

const root = process.cwd();

export default defineConfig({
  mode: 'production',
  base: 'https://lf-cdn-tos.bytescm.com/obj/static/mbdesign/vue/',
  css: {
    preprocessorOptions: {
      less: {
        paths: [paths.resolvePath('../web-vue')],
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^@web-vue\/(.*)/,
        replacement: path.resolve(root, '../web-vue/$1'),
      },
    ],
  },
  build: {
    target: 'es2015',
  },
  plugins: [vueDocs(), vue(), vueJsx(), svgLoader({ svgoConfig: {} })],
}) as InlineConfig;
