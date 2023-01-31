<template>
  <div
    class="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <img src="../assets/img/marketmix.png" alt="MarketMix Logo" width="100" />
    <h1 class="text-white text-2xl">Vendor section</h1>
    <button>
      <router-link to="/login">Logout</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Secure",
  data() {
    return {};
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {},
};
</script>
