<template>
  <div
    id="app"
    class="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br"
  >
    <div class="flex min-h-screen items-center justify-center">
      <div
        class="m-10 min-h-1/2 bg-gray-800 border border-gray-900 bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
      >
        <router-view @authenticated="setAuthenticated" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      currentRol: JSON.parse(localStorage.getItem("user")) || "",
      mockAccount: {
        rol: "admin",
        pin: "4090",
      },
      userData: {
        assembler: {
          baseSalary: 2000000,
          amountShoesDone: "",
          assambleShoesCost: "",
          maxShoesPossible: 100,
        },
        secretary: {
          baseSalary: 1000000,
        },
        vendor: {
          baseSalary: 1500000,
          salesComision: 3.5,
        },
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      localStorage.removeItem("user");
      this.$router.replace({ name: "Login" });
    },
  },
  mounted() {
    /*     if (this.currentRol) {
      switch (this.currentRol) {
        case "admin":
          break;

        default:
          break;
      }
    } */
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
