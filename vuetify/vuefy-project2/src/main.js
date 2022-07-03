import Vue from 'vue';
import App from './App.vue';
import eslintrc from './.eslintrc';
import vuetify from './plugins/vuetify';
import router from './router';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  eslintrc,
  render: (h) => h(App),
}).$mount('#app');
