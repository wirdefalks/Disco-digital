<template>
  <div class="flex flex-col justify-start bg-ContainerGray">
    <h1 class="text-3xl text-center font-bold">SEARCH</h1>
    <ToggleAccordion />
    <SinglePost
      v-for="(post, index) in filteredContent"
      :post="post"
      :index="index"
      :key="post._id"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      posts: this.$store.state.posts,
    };
  },
  methods: {},
  computed: {
    filteredContent() {
      let f;
      if (this.$store.state.searchOrFilter) {
        f = this.posts.filter((x) =>
          x.title
            ? x.title.toLowerCase().includes(this.$store.state.search)
            : ""
        );
      } else {
        f = this.posts.filter((x) =>
          x.tags ? x.tags.sort().join().includes(this.$store.state.filters) : ""
        );
      }

      return f;
    },
  },
};
</script>

<style>
</style>