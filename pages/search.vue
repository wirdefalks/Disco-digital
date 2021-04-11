<template>
  <div class="grid h-screen place-items-center grid-cols-1">
    <h1 class="text-5xl text-center font-bold">SEARCH</h1>
    <div>
      <input
        class="mb-auto border w-72"
        type="text"
        name="search"
        v-model="searchTerm"
      />

      <div v-for="link in filteredContent" :key="link.name">
        <li v-if="link._type == 'post'" class="mr-3">
          <NuxtLink
            class="inline-block no-underline transition-all duration-200 hover:text-blue-800 py-2 px-4"
            :to="'/post/' + link.title"
            >{{ link.title }}</NuxtLink
          >
        </li>
        <li v-if="link._type == 'subcategory'" class="mr-3">
          <NuxtLink
            class="inline-block no-underline transition-all duration-200 hover:text-blue-800 py-2 px-4"
            :to="'/subcategory/' + link.label"
            >{{ link.label }}</NuxtLink
          >
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content";

const query = groq`*`;

export default {
  components: { SanityContent },
  data() {
    return {
      searchTerm: "",
      results: "",
    };
  },

  async asyncData({ $sanity }) {
    return { all: await $sanity.fetch(query) };
  },
  methods: {},
  computed: {
    filteredContent() {
      const f = this.all.filter((x) =>
        x.title ? x.title.includes(this.searchTerm) : ""
      );
      const l = this.all.filter((x) =>
        x.label ? x.label.includes(this.searchTerm) : ""
      );
      const results = [f, l];
      return results.flat();
    },
  },
};
</script>

<style>
</style>