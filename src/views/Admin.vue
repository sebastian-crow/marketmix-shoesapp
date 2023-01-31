<template>
  <div
    class="w-[800px] relative flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <div
      class="absolute top-10 right-10 bg-white rounded-md w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <button v-on:click="this.$parent.logout">Logout</button>
    </div>
    <div class="absolute top-4 left-12">
      <h1
        class="text-white text-4xl font-['Unbounded'] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Admin Panel
      </h1>
    </div>

    <div class="grid grid-rows-3 gap-6 pt-10">
      <Card
        rol="Secretario/a"
        rolPath="Secretary"
        :baseSalary="this.$parent.userData.secretary.baseSalary"
      />
      <Card
        rol="Vendedor/a"
        rolPath="Vendor"
        :baseSalary="this.$parent.userData.vendor.baseSalary"
        :salesComision="this.$parent.userData.vendor.salesComision"
      />
      <Card
        rol="Ensamblador"
        rolPath="Assembler"
        :baseSalary="this.$parent.userData.assembler.baseSalary"
        :amountShoesDone="this.$parent.userData.assembler.amountShoesDone"
        :assambleShoesCost="this.$parent.userData.assembler.assambleShoesCost"
        :maxShoesPossible="this.$parent.userData.assembler.maxShoesPossible"
      />
    </div>
    <h1>Gastos totales = 10.000.000 COP</h1>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

/* const userData = ; */
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
  methods: {
    logoutHere() {
      console.log("Logout here");
    },
  },
};
</script>
