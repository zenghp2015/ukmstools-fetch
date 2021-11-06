import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VFetch from "../src/index";
import FetchConfig from "./config/fetch.config";

Vue.config.productionTip = false;
Vue.use(VFetch, FetchConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
