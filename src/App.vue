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
          baseSalary: 1500000,
          hourOfWork: 0,
          extraHour: 0,
          assambleCost: 50000,
          amountShoesDone: 1000,
          amountSneakersDone: 2000,
          maxShoesPossible: 5000,
          transport: 140000,
          children: ["Hijo1", "Hijo2", "Hijo3"],
          bonusPerChild: 0,
          salary: 0,
        },
        secretary: {
          baseSalary: 1160000,
          hourOfWork: 0,
          extraHour: 0,
          salary: 0,
        },
        vendor: {
          baseSalary: 1900000,
          salesComision: 3.5,
          additionalBonification: 0,
          transport: 140000,
          salary: 0,
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
      location.reload();
    },
  },
  mounted() {
    console.log("Say hi");
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
