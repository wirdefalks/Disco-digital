<template>
  <div class="text-right">
    <button
      @click="toggleAccordion('-')"
      class="m-3 px-5 rounded-md bg-PrimaryGreen"
    >
      - minifcare alla
    </button>
    <button
      @click="toggleAccordion('+')"
      class="m-3 px-5 rounded-md bg-PrimaryGreen"
    >
      + expande alla
    </button>
  </div>
</template>
<script>
import minMax from '../mixins/minMax'
export default {
    component: 'ToggleAccordion',
    mixins: [ minMax ],
    methods:{
         toggleAccordion(action) {
      let accordions = document.querySelectorAll(".accordion");
      action === "+" ?
        [...accordions].forEach((x) => {
          x.classList.remove("hidden");
          x.previousElementSibling.classList.replace("showI", "hideI");
        }) :
        [...accordions].forEach((x) => {
          x.classList.add("hidden");
          x.previousElementSibling.classList.replace("hideI", "showI");
        });
    },
    }
};
</script>

<style>
</style>