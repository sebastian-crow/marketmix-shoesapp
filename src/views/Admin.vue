<template>
  <div
    class="w-[800px] relative flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <div
      class="absolute top-10 right-10 bg-white rounded-md w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
        Admin Panel
      </h1>
    </div>

    <div class="grid grid-rows-3 gap-6 pt-10">
      <Card
        rol="Secretario/a"
        rolPath="Secretary"
        :baseSalary="this.$parent.userData.secretary.baseSalary"
        :salary="this.$parent.userData.secretary.salary"
        :url="`https://picsum.photos/seed/2/2000/1000`"
      />
      <Card
        rol="Vendedor/a"
        rolPath="Vendor"
        :baseSalary="this.$parent.userData.vendor.baseSalary"
        :salary="this.$parent.userData.vendor.salary"
        :url="`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZGVkb3J8ZW58MHx8MHx8&w=1000&q=80`"
      />
      <Card
        rol="Ensamblador"
        rolPath="Assembler"
        :baseSalary="this.$parent.userData.assembler.baseSalary"
        :salary="this.$parent.userData.assembler.salary"
        :url="`https://media.istockphoto.com/id/1206225908/es/foto/cobbler-est%C3%A1-reparando-zapatos-para-clientes.jpg?s=612x612&w=0&k=20&c=GWaVL-rG1GAaZFnpPdyRPtbCk9uADk_sbeLRkKGEaXk=`"
      />
      <br />
    </div>
    <h1
      class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <code class="text-blue-100 bg-slate-800 rounded-md text-xl">
        <code class="text-slate-100">Gastos totales en personal = </code>
        <code class="bg-slate-900 rounder-xl">{{ totalAmount }} COP</code></code
      >
    </h1>
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
