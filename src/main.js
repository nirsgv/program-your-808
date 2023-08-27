import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueMobileDetection from "vue-mobile-detection";
import "@/reset.scss";
import "@/main.scss";

Vue.config.productionTip = false;
Vue.use(VueMobileDetection);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
