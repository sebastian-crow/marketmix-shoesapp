import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Login from "./views/Login";
import {
  Card,
  SalaryCard,
  Settlement,
  Collapse,
  Navigation,
} from "./components/";

import "./index.css";

Vue.component("Login", Login);
Vue.component("Card", Card);
Vue.component("SalaryCard", SalaryCard);
Vue.component("Settlement", Settlement);
Vue.component("Collapse", Collapse);
Vue.component("Navigation", Navigation);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
