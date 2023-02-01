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
        :salary="this.$parent.userData.secretary.salary"
      />
      <Card
        rol="Vendedor/a"
        rolPath="Vendor"
        :baseSalary="this.$parent.userData.vendor.baseSalary"
        :salary="this.$parent.userData.vendor.salary"
      />
      <Card
        rol="Ensamblador"
        rolPath="Assembler"
        :baseSalary="this.$parent.userData.assembler.baseSalary"
        :salary="this.$parent.userData.assembler.salary"
      />
    </div>
    <h1>Gastos totales en personal = {{ totalAmount }} COP</h1>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Secure",
  data() {
    return {
      totalAmount:
        this.$parent.userData.secretary.salary +
        this.$parent.userData.vendor.salary +
        this.$parent.userData.assembler.salary,
    };
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {},
  mounted() {
    console.log();
  },
};
</script>
