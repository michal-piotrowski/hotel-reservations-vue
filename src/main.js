import { createApp } from 'vue';
import App from './App.vue';
import HrTool from './helpers/HrTool.js';
import router from './router';
import { store } from './store/store.js';
import vueSmoothScroll from 'vue-smooth-scroll'

const app = createApp(App).use(router).use(store).use(vueSmoothScroll);
app.config.devtools = true;
app.config.globalProperties.$filters = { translate: HrTool.translate };
app.mount('#app');
