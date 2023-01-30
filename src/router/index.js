import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  /*   {
    path: "/",
    name: "Home",
    component: Home,
  }, */

  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "admin" */ "../views/Admin.vue");
    },
  },
  {
    path: "/secretary",
    name: "Secretary",
    component: function () {
      return import(
        /* webpackChunkName: "secretary" */ "../views/Secretary.vue"
      );
    },
  },
  {
    path: "/vendor",
    name: "Vendor",
    component: function () {
      return import(/* webpackChunkName: "vendor" */ "../views/Vendor.vue");
    },
  },

  {
    path: "/assembler",
    name: "Assembler",
    component: function () {
      return import(
        /* webpackChunkName: "assembler" */ "../views/Assembler.vue"
      );
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import(/* webpackChunkName: "login" */ "../views/Login.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
