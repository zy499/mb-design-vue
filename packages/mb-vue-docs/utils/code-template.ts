export const mainContent = `import { createApp } from 'vue';
import MbVue from '@mb-design/web-vue';
import App from './App.vue';
import '@mb-design/web-vue/dist/mb.css';
import './style.css';

const app = createApp(App);
app.use(MbVue);
app.mount('#app');`;

export const styleContent = `#app { padding: 20px; }`;
