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
        Ensamblador/a
      </h1>
    </div>
    <div class="h-[30rem] w-[90%] relative">
      <div class="mt-10 flex flex-row items-center justify-center gap-4">
        <SalaryCard
          rol="Vendedor/a"
          rolPath="Vendor"
          :baseSalary="this.$parent.userData.assembler.baseSalary"
        />
        <AssembleCost
          rol="Vendedor/a"
          rolPath="Vendor"
          :assemblerCost="this.$parent.userData.assembler.assambleCost"
          :percentage="100"
        />
        <Bonification
          rol="Vendedor/a"
          rolPath="Vendor"
          bonificationCase="Bonificacion por hijo"
          :bonification="bonification"
          :percentage="percentage"
        />
        <AmountShoesSneakersDone
          rol="Vendedor/a"
          rolPath="Vendor"
          bonificationCase="Bonificacion por hijo"
          :bonification="bonification"
          :percentage="percentage"
          :shoesDone="this.$parent.userData.assembler.amountShoesDone"
          :sneakersDone="this.$parent.userData.assembler.amountSneakersDone"
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
                La liquidación para el ensamblador/a se hace teniendo en cuenta
                las siguientes variables:<br />
              </p>
              <br />
              <code
                >Salario base + número de horas extra trabajadas + zapatillas
                ensambladas + zapatos ensamblados bonificaciones por hijo +
                auxilio de transporte<br />
                = <br />
                {{ salary }} COP
              </code>
            </div>
          </div>
        </template>
      </Collapse>
      <div class="absolute top-[30rem] right-[-1.5rem]" v-if="isAdmin">
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
  Bonification,
  Transport,
  AssembleCost,
  AmountShoesSneakersDone,
} from "../components";

export default {
  name: "Vendor",
  data() {
    return {
      hourOfWork: parseInt(this.$parent.userData.assembler.baseSalary / 240),
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
      this.extraHour = parseInt(this.hourOfWork * (220 / 100));
    },
    getSalary() {
      this.salary =
        this.$parent.userData.assembler.baseSalary +
        this.extraHour * 15 +
        this.bonification +
        this.$parent.userData.assembler.transport +
        this.$parent.userData.assembler.assambleCost;
    },
    sendSalaryToParent() {
      this.$parent.userData.assembler.salary = this.salary;
    },
    getChildrenBonification() {
      this.bonification =
        this.$parent.userData.children > 2 ? 60000 * children.length : 80000;
    },
    getBonificationPerAssambledShoes() {
      if (this.$parent.userData.assembler.amountShoesDone >= 1000) {
        this.$parent.userData.assembler.assambleCost =
          this.$parent.userData.assembler.assambleCost +
          this.$parent.userData.assembler.assambleCost * (10 / 100);
        this.percentage = 10;
      }
      if (this.$parent.userData.assembler.amountShoesDone >= 2000) {
        this.$parent.userData.assembler.assambleCost =
          this.$parent.userData.assembler.assambleCost +
          this.$parent.userData.assembler.assambleCost * (20 / 100);
        this.percentage = 20;
      }
    },
    getBonificationPerAssambledSneakers() {
      if (this.$parent.userData.assembler.amountSneakersDone >= 1700) {
        this.$parent.userData.assembler.assambleCost =
          parseInt(this.$parent.userData.assembler.assambleCost) +
          parseInt(this.$parent.userData.assembler.assambleCost * (15 / 100));
        this.percentage = 15;
      }
      if (this.$parent.userData.assembler.amountSneakersDone >= 3000) {
        this.$parent.userData.assembler.assambleCost =
          parseInt(this.$parent.userData.assembler.assambleCost) +
          parseInt(this.$parent.userData.assembler.assambleCost * (30 / 100));
        this.percentage = 30;
      }
    },
  },
  mounted() {
    if (!this.$parent.authenticated && !this.$parent.currentRol) {
      this.$router.replace({ name: "Login" });
    }
    this.getExtraHour();
    this.getSalary();
    this.getChildrenBonification();
    this.getBonificationPerAssambledShoes();
    this.getBonificationPerAssambledSneakers();
    this.sendSalaryToParent();
    this.isAdmin = this.$parent.currentRol.rol === "admin" ? true : false;
  },
};
</script>
