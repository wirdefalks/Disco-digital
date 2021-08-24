<template>
  <div class="flex flex-col p-4 mt-4 bg-white">
    <Treeselect
      v-model="value"
      :multiple="true"
      :options="options"
      placeholder="Filtrera..."
      :disable-branch-nodes="true"

    />
    <button
      @click="searchFilter"
      class="px-5 my-3 ml-auto mr-0 rounded-md bg-PrimaryGreen"
    >
      Spara
    </button>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";

import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  components: { Treeselect },
  data() {
    return {
      value: [],
      isSearch:false,
      options: [
        {
          id: "Nivå",
          label: "Nivå",
          children: [
            {
              id: "Nybörjare",
              label: "Nybörjare",
            },
            {
              id: "Avancerad",
              label: "Avancerad",
            },
          ],
        },
        {
          id: "Jagar",
          label: "Jag är...",
          children: [
            {
              id: "student",
              label: "Student",
            },
            {
              id: "Lärare",
              label: "Lärare",
            },
          ],
        },
        {
          id: "Lärostäte",
          label: "Lärostäte",
          children: [
            {
              id: "kristianstad",
              label: "Kristianstad",
            },
            {
              id: "Malmö",
              label: "Malmö",
            },
          ],
        },
      ],
    };
  },
  methods: {
    searchFilter() {
      let newVal =  this.value.sort().join()
      this.$store.commit("SET_searchOrFilter", this.isSearch);
      this.$store.commit("SET_filters", newVal);
      this.$router.push("/search");
    },
  },
};
</script>

<style></style>
