<!-- <template>
  <div class="accordion">
    <div
      class="accordion-item"
      v-bind:class="{ 'accordion-active': content.active }"
    >
      <div class="accordion-header">
        <a href="#" @v-on:click="expand(e)">
          <div class="accordion-header-div">{{ content.title }}</div>
          <div class="accordion-header-div">
            <div class="accordion-caret"></div>
          </div>
        </a>
      </div>
      <div class="accordion-body" v-bind:ref="'accordion-body-'">
        <div class="accordion-content">{{ content.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*   props: [
    "rol",
    "rolPath",
    "baseSalary",
    "salesComision",
    "amountShoesDone",
    "assambleShoesCost",
    "maxShoesPossible",
  ], */
  /* props: ["contents"], */
  data() {
    return {
      content: {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        active: false,
      },
    };
  },
  methods: {
    expand(e) {
      e.preventDefault();

      let el = this.$refs["accordion-body-"];

      if (this.content.active === false) {
        this.content.active = true;

        TweenLite.to(el, 1, {
          height: el.scrollHeight,
          ease: Elastic.easeOut.config(1, 0.3),
        });
      } else {
        this.content.active = false;

        TweenLite.to(el, 0.5, {
          height: 0,
          ease: Bounce.easeOut,
        });
      }
    },
  },
};
</script>


 -->

<template>
  <div class="accordion">
    <div class="accordion-item">
      <button
        @click="toggleAccordion()"
        class="flex items-center space-x-3"
        :aria-expanded="isOpen"
        :aria-controls="`collapse${_uid}`"
      >
        <slot name="title" />
        <svg
          class="w-3 transition-all duration-200 transform"
          :class="{
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          }"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 10"
          aria-hidden="true"
        >
          <path
            d="M15 1.2l-7 7-7-7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div v-show="isOpen" :id="`collapse${_uid}`">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
@import "Collapse.css";
</style>
