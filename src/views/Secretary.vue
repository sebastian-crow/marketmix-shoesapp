<template>
  <div
    class="w-[800px] relative flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <div
      class="absolute top-8 right-10 w-30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <!-- <button
        v-on:click="this.$parent.logout"
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Logout
      </button> -->
      <button
        v-on:click="this.$parent.logout"
        class="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
      >
        Logout
      </button>
    </div>
    <div class="absolute top-4 left-12">
      <h1
        class="text-white text-4xl font-['Unbounded'] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Secretario/a
      </h1>
    </div>
    <div class="h-96 w-full relative">
      <div
        class="flex sm:flex-row flex-col gap-2 space-y-0 sm:space-x-2 flex-row w-full items-center justify-center h-full"
      >
        <SalaryCard
          rol="Secretario/a"
          rolPath="Secretary"
          :baseSalary="this.$parent.userData.secretary.baseSalary"
        />
        <Settlement
          rol="Secretario/a"
          rolPath="Secretary"
          :baseSalary="this.$parent.userData.secretary.baseSalary"
        />
      </div>
      <Collapse
        class="m-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <template v-slot:title>
          <span class="font-semibold text-xl">Detalles Liquidacion</span>
        </template>
        <template v-slot:content>
          <div class="accordion-body-1">
            <div class="accordion-content">
              <p>
                adadsdadadjkahdjkahskdadadadadssssssssssssssssssssssssssshj
                dsdadadjkahdjkahskdadadadadssssssssssssssssssssssssssshaksdahkdkj
              </p>
            </div>
          </div>
        </template>
      </Collapse>
      <div class="absolute top-96 right-4">
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
Collapse;
import { SalaryCard, Settlement, Collapse, Navigation } from "../components";

export default {
  name: "Secure",
  data() {
    return {};
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
    /*   if (this.$parent.currentRol !== "secretary") {
      this.$router.replace({ name: "Login" });
    } */
  },
  methods: {},
};
</script>

<style>
@import "../components/Collapse/Collapse.css";
</style>
