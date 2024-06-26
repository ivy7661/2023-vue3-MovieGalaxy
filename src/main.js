import 'normalize.css';
import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import VueEasyLightbox from 'vue-easy-lightbox';
import CKEditor from '@ckeditor/ckeditor5-vue';
import mitt from 'mitt';

import App from './App.vue';
import router from './router';

/* vee-validate 設定 */
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});
// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
const emitter = mitt();

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueEasyLightbox);
app.use(CKEditor);
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
app.config.globalProperties.$bus = emitter;

app.component('VueLoading', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
