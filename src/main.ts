import { createApp } from 'vue';
import App from './App.vue';
import HrTool from './helpers/HrTool';
import router from './router';

const app = createApp(App).use(router);
app.config.globalProperties.$filters = { translate: HrTool.translate };
app.mount('#app');
