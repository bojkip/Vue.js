import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import TheHome from './views/TheHome.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: TheHome,
    },
  ],
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
