<template>
  <div
    class="p-4 items-center justify-center w-[690px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-10 shadow-xl hover:rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <img
      class="mx-auto w-full block w-4/12 h-40 rounded-lg"
      alt="art cover"
      loading="lazy"
      src="https://picsum.photos/seed/2/2000/1000"
    />
    <div class="sm:w-8/12 pl-0 p-5">
      <div class="space-y-2">
        <div class="space-y-4">
          <h4
            class="text-md font-['Unbounded'] font-semibold text-white text-justify"
          >
            <router-link :to="{ name: rolPath }">{{ rol }}</router-link>
          </h4>
        </div>
        <div class="flex items-center space-x-4 justify-between">
          <div class="flex gap-3 space-y-1">
            <span class="text-sm" v-show="rolPath == 'Secretary'">
              Salario Base
              {{ baseSalary }}
            </span>
            <span class="text-sm" v-show="rolPath == 'Vendor'">
              Salario Base
              {{ baseSalary }}
              Comision
              {{ salesComision }}
            </span>
            <span class="text-sm" v-show="rolPath == 'Assembler'">
              Salario Base
              {{ baseSalary }}
              Cantidad de zapatos hechos
              {{ amountShoesDone }}
              Costo de ensamble por zapato
              {{ assambleShoesCost }}
              Cantidad maxima posible de ensamble
              {{ maxShoesPossible }}
            </span>
          </div>
          <div class="px-3 py-1 rounded-lg flex space-x-2 flex-row">
            <h1>Liquidación = 2.000.000 COP</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "rol",
    "rolPath",
    "baseSalary",
    "salesComision",
    "amountShoesDone",
    "assambleShoesCost",
    "maxShoesPossible",
  ],
};
</script>
