<template>
  <div class="flex flex-col justify-start bg-ContainerGray">
    <h1 class="text-3xl text-center font-bold">SEARCH</h1>
    <ToggleAccordion />
    <SinglePost v-for="(post, index) in filteredContent" :post="post" :index="index" :key="post._id" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchTerm: "",
      results: "",
      posts: this.$store.state.posts,
    };
  },
  methods: {},
  computed: {
    filteredContent() {
      const f = this.posts.filter((x) =>
        x.title ? x.title.toLowerCase().includes(this.$store.state.search) : ""
      );
      return f;
    },
  },
};
</script>

<style>
</style>