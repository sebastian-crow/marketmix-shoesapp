<template>
  <div
    class="w-[800px] relative flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <div
      class="absolute top-8 right-10 w-30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
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
      <div class="mt-10 flex flex-row items-center justify-center gap-4">
        <SalaryCard
          rol="Secretario/a"
          rolPath="Secretary"
          :baseSalary="this.$parent.userData.secretary.baseSalary"
        />
        <Settlement
          rol="Secretario/a"
          rolPath="Secretary"
          :Settlement="salary"
        />
      </div>
      <div class="mt-8 pb-10 flex flex-row items-center justify-center gap-4">
        <HourOfWork
          rol="Secretario/a"
          rolPath="Secretary"
          :hourOfWork="hourOfWork"
        />
        <ExtraHour
          rol="Secretario/a"
          rolPath="Secretary"
          :ExtraHour="extraHour"
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
            <div class="accordion-content h-48">
              <p class="text-start">
                La liquidación para el secretario/a se hace teniendo en cuenta
                las siguientes variables:<br />
              </p>
              <br />
              <code
                >Salario base + número de horas extra trabajadas <br />
                = <br />
                {{ salary }} COP
              </code>
            </div>
          </div>
        </template>
      </Collapse>
      <div class="absolute top-96 right-4" v-if="isAdmin">
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
import {
  SalaryCard,
  Settlement,
  ExtraHour,
  HourOfWork,
  Collapse,
  Navigation,
} from "../components";

export default {
  name: "Secretary",
  data() {
    return {
      hourOfWork: parseInt(this.$parent.userData.secretary.baseSalary / 240),
      extraHour: 0,
      salary: 0,
      isAdmin: false,
    };
  },
  methods: {
    getExtraHour() {
      this.extraHour = parseInt(this.hourOfWork * (180 / 100));
    },
    getSalary() {
      this.salary =
        this.$parent.userData.secretary.baseSalary + this.extraHour * 10;
    },
    sendSalaryToParent() {
      this.$parent.userData.secretary.salary = this.salary;
    },
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
    this.getExtraHour();
    this.getSalary();
    this.sendSalaryToParent();
    this.isAdmin = this.$parent.currentRol.rol === "admin" ? true : false;
  },
};
</script>

<style>
@import "../components/Collapse/Collapse.css";
</style>
