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
  ExtraHour,
  HourOfWork,
  MonthSales,
  Bonification,
  SalesComision,
  Transport,
  AssembleCost,
  AmountShoesSneakersDone,
} from "./components/";

import "./index.css";

Vue.component("Login", Login);
Vue.component("Card", Card);
Vue.component("SalaryCard", SalaryCard);
Vue.component("Settlement", Settlement);
Vue.component("ExtraHour", ExtraHour);
Vue.component("HourOfWork", HourOfWork);
Vue.component("Collapse", Collapse);
Vue.component("Navigation", Navigation);

Vue.component("MonthSales", MonthSales);
Vue.component("Bonification", Bonification);
Vue.component("SalesComision", SalesComision);
Vue.component("Transport", Transport);
Vue.component("AssembleCost", AssembleCost);
Vue.component("AmountShoesSneakersDone", AmountShoesSneakersDone);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
