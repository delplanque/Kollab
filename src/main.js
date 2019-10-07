import Vue              from 'vue';
import VueResource 	    from 'vue-resource';
import VueFire          from 'vuefire';
import App              from './core/App.vue';
import router           from './core/router';
//import { database }     from './core/database';
import { store } 			  from './store/store';
import { global } from './core/environments';

Vue.use(VueResource);
Vue.use(VueFire);
Vue.config.productionTip = false;
Vue.config.environments  = global.environments;

new Vue({
  router,
  //database,
  store,
  render: h => h(App)
}).$mount('#app')
