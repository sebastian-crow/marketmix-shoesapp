<template>
  <div class="w-40 grid grid-cols-2">
    <div>
      <router-link
        to="/Vendor"
        type="button"
        class="rotate-180 text-blue-200 border border-blue-200 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-200 dark:text-blue-200 dark:hover:text-white dark:focus:ring-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only"> </span>
      </router-link>
    </div>
    <div>
      <router-link
        to="/Assembler"
        type="button"
        class="text-blue-200 border border-blue-200 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-200 dark:text-blue-200 dark:hover:text-white dark:focus:ring-blue-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Icon description</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  methods: {},
};
</script>
