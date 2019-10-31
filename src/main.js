import Vue from "vue";
import "./vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import BootstrapVue from 'bootstrap-vue'
import './assets/style.scss'

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
