import Vue from 'vue';

import VueFire from 'vuefire';

import VueResource from 'vue-resource';

import App from './core/App.vue';
import { database } from './core/database';
import { global } from './core/environments';
import router from './core/router';
// import vuetify from './plugins/vuetify';

Vue.use(VueResource);
Vue.use(VueFire);
Vue.config.productionTip = false;
Vue.config.environments = global.environments;

new Vue({
  router,
  database,
  render: h => h(App)
}).$mount('#app');
