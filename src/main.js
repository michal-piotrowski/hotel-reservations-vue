import { createApp } from 'vue';
import App from './App.vue';
import HrTool from './helpers/HrTool.js';
import router from './router';
import { store } from './store/store.js';
import vueSmoothScroll from 'vue-smooth-scroll';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faSpinner);

const app = createApp(App).use(router).component("fa", FontAwesomeIcon).use(store).use(vueSmoothScroll);
app.config.devtools = true;
app.config.globalProperties.$filters = { translate: HrTool.translate };
app.mount('#app');
