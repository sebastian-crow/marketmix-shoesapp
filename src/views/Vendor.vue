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
        Vendedor/a
      </h1>
    </div>
    <div class="h-[27rem] w-[90%] relative">
      <div class="mt-10 flex flex-row items-center justify-center gap-4">
        <SalaryCard
          rol="Vendedor/a"
          rolPath="Vendor"
          :baseSalary="this.$parent.userData.vendor.baseSalary"
        />
        <SalesComision
          rol="Vendedor/a"
          rolPath="Vendor"
          :salesComision="this.$parent.userData.vendor.salesComision"
        />
        <MonthSales
          rol="Vendedor/a"
          rolPath="Vendor"
          :monthSales="monthSales"
        />
        <Bonification
          rol="Vendedor/a"
          rolPath="Vendor"
          bonificationCase="Bonificaciones"
          :bonification="bonification"
          :percentage="percentage"
        />
      </div>
      <div class="mt-8 pb-10 flex flex-row items-center justify-center gap-4">
        <HourOfWork
          rol="Vendedor/a"
          rolPath="Vendor"
          :hourOfWork="hourOfWork"
        />
        <ExtraHour rol="Vendedor/a" rolPath="Vendor" :ExtraHour="extraHour" />
        <Transport
          rol="Vendedor/a"
          rolPath="Vendor"
          :transport="this.$parent.userData.vendor.transport"
        />
        <Settlement rol="Vendedor/a" rolPath="Vendor" :Settlement="salary" />
      </div>
      <Collapse
        class="m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <template v-slot:title>
          <span class="font-semibold text-xl">Detalles Liquidacion</span>
        </template>
        <template v-slot:content>
          <div class="accordion-body-1">
            <div class="accordion-content h-48">
              <p class="text-start">
                La liquidación para el vendedor/ra se hace teniendo en cuenta
                las siguientes variables:<br />
              </p>
              <br />
              <code
                >Salario base + número de horas extra trabajadas +
                bonificaciones + auxilio de transporte<br />
                = <br />
                {{ salary }} COP
              </code>
            </div>
          </div>
        </template>
      </Collapse>
      <div class="absolute top-[26.8rem] right-[-1.5rem]" v-if="isAdmin">
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
  MonthSales,
  Bonification,
  SalesComision,
  Transport,
} from "../components";

export default {
  name: "Vendor",
  data() {
    return {
      hourOfWork: parseInt(this.$parent.userData.vendor.baseSalary / 240),
      extraHour: 0,
      salary: 0,
      monthSales: 5200000,
      bonification: 0,
      percentage: 0,
      isAdmin: false,
    };
  },
  methods: {
    getExtraHour() {
      this.extraHour = parseInt(this.hourOfWork * (180 / 100));
    },
    getSalary() {
      this.salary =
        this.$parent.userData.vendor.baseSalary +
        this.extraHour * 20 +
        this.bonification +
        this.$parent.userData.vendor.transport;
    },
    sendSalaryToParent() {
      this.$parent.userData.vendor.salary = this.salary;
    },
    getBonification() {
      if (this.monthSales >= 5000000) {
        this.bonification = parseInt(
          this.$parent.userData.vendor.baseSalary * (10 / 100)
        );
        this.percentage = 10;
      }
      if (this.monthSales >= 10000000) {
        this.bonification = parseInt(
          this.$parent.userData.vendor.baseSalary * (20 / 100)
        );
        this.percentage = 20;
      }
    },
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
    this.getExtraHour();
    this.getSalary();
    this.getBonification();
    this.sendSalaryToParent();
    this.isAdmin = this.$parent.currentRol.rol === "admin" ? true : false;
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>
