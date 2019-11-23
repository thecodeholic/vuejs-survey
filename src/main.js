import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import './plugins/bootstrap';
import './plugins/ckeditor';
import './plugins/font-awesome';

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');
