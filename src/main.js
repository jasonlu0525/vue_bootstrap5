import { createApp } from 'vue';
import {
  defineRule, configure, Field, Form, ErrorMessage,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'material-icons/iconfont/material-icons.css';

configure({
  generateMessage: localize({ zh_TW: zhTW }),
});
setLocale('zh_TW');
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

const app = createApp(App);
app.use(router);

app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
