<template>
  <!--   <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="authenticated" to="/secretary">Secretary</router-link>
      <router-link v-if="authenticated" to="/vendor">Vendor</router-link>
      <router-link v-if="authenticated" to="/assambler">Assambler</router-link>
      <router-link
        v-if="authenticated"
        to="/login"
        v-on:click.native="logout()"
        replace
        >Logout</router-link
      >
      <router-link v-else to="/login">Login</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div> -->
  <div
    id="app"
    class="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br"
  >
    <div class="flex min-h-screen items-center justify-center">
      <div
        class="min-h-1/2 bg-gray-800 border border-gray-900 bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
      >
        <router-view @authenticated="setAuthenticated" />
        <!-- <Login v-if="!authenticated" /> -->

        <!-- <component :is="currentView" /> -->
        <!--    -->
        <br />
        <!-- <p v-show="currentRol">{{ currentRol }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      // this is only for testing purposes no actual app will have this
      // an api call will validate user credentials
      mockAccount: {
        rol: "admin",
        pin: "4090",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
  mounted() {
    console.log(this.$parent);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
}

#nav a:not(:first-child) {
  border-left: 1px solid #2c3e50;
  padding-left: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
