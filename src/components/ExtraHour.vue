<template>
  <div
    class="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-red-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
  >
    <div class="flex justify-between w-full">
      <div>
        <div class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>
      </div>
      <div>
        <div
          style="padding-top: 0.1em; padding-bottom: 0.1rem"
          class="flex items-center text-xs px-3 bg-red-200 text-red-800 rounded-full"
        >
          180%
        </div>
      </div>
    </div>
    <div>
      <div class="font-bold text-2xl text-center">{{ ExtraHour }} COP</div>
      <div class="font-bold text-sm">Horas Extra</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ExtraHour", "rolPath", "rol"],
  name: "ExtraHour",
};
</script>
