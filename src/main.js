// main.js or main.ts

import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './router';
import App from './App.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');



