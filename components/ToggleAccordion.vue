<template>
  <div class="text-right">
    <button
      @click="toggleAccordion('-')"
      class="m-3 px-5 rounded-md bg-PrimaryGreen"
    >
      - Minimera alla
    </button>
    <button
      @click="toggleAccordion('+')"
      class="m-3 px-5 rounded-md bg-PrimaryGreen"
    >
      + Expandera alla
    </button>
  </div>
</template>
<script>
import minMax from '../mixins/minMax'
export default {
    component: 'ToggleAccordion',
    mixins: [ minMax ],
};
</script>

<style>
</style>
