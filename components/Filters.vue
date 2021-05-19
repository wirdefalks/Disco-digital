<template>
  <div class="flex flex-col bg-white p-4 mt-4">
    <Treeselect
      v-model="value"
      :multiple="true"
      :options="options"
      placeholder="Filter by..."
      :disable-branch-nodes="true"
      
    />
    <button
      @click="searchFilter"
      class="my-3 px-5 ml-auto rounded-md bg-PrimaryGreen"
    >
      spara
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
          id: "level",
          label: "Level",
          children: [
            {
              id: "beginner",
              label: "Beginner",
            },
            {
              id: "intermediate",
              label: "Intermediate",
            },
            {
              id: "advanced",
              label: "Advanced",
            },
          ],
        },
        {
          id: "iama",
          label: "I Am A...",
          children: [
            {
              id: "student",
              label: "Student",
            },
            {
              id: "teacher",
              label: "Teacher",
            },
          ],
        },
        {
          id: "university",
          label: "University",
          children: [
            {
              id: "kristianstad",
              label: "Kristianstad",
            },
            {
              id: "malmoe",
              label: "Malmoe",
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
