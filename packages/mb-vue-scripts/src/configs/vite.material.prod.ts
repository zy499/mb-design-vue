import { InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { terser } from 'rollup-plugin-terser';

const getConfig = ({
  input,
  name,
}: {
  input: string;
  name: string;
}): InlineConfig => {
  return {
    mode: 'production',
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: true,
      minify: false,
      rollupOptions: {
        external: ['vue', '@mb-design/web-vue', '@mb-design/web-vue/es/icon'],
        output: [
          {
            format: 'module',
            entryFileNames: 'index.esm.js',
          },
          {
            format: 'commonjs',
            entryFileNames: 'index.cjs.js',
          },
          {
            format: 'umd',
            entryFileNames: 'index.min.js',
            sourcemap: true,
            name,
            globals: {
              'vue': 'Vue',
              '@mb-design/web-vue': 'MbVue',
              '@mb-design/web-vue/es/icon': 'MbVueIcon',
            },
            plugins: [terser()],
          },
        ],
      },
      lib: {
        entry: input,
        formats: ['es'],
      },
    },
    plugins: [vue(), vueJsx(), svgLoader()],
  };
};

export default getConfig;
