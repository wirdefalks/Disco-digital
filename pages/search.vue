<template>
  <div class="flex flex-col justify-start bg-ContainerGray  mb-12">
    <h1 class="text-3xl text-center font-bold m-4">Sök</h1>
    <div>
      <div v-if="filteredContent">
    <ToggleAccordion  />
        <SinglePost
          v-for="(post, index) in filteredContent"
          :post="post"
          :index="index"
          :key="post._id"
        />
      </div>
    </div>
    <div v-html="text" class="p-6"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.$store.state.posts,
      found: false,
      text: "",
    };
  },
  methods: {
    logg() {
      if (this.found == 0) {
        this.text = `<h1>Hoppsan! Tyvärr kunde vi inte hitta din låt. Fråga DJ:n om en annan eller bläddra i snabbmenyn till höger för att kunna dansa vidare.</h1>`;
      } else {
        this.text = ``;
      }
    },
  },
  computed: {
    filteredContent() {
      let f;
      if (this.$store.state.searchOrFilter) {
        f = this.posts.filter((x) =>
          x.title && x.plain
            ? x.title.toLowerCase().includes(this.$store.state.search) || x.plain.toLowerCase().includes(this.$store.state.search)
            : ""
        );
      } else {
        f = this.posts.filter((x) =>
          x.tags ? x.tags.sort().join().includes(this.$store.state.filters) : ""
        );
      }

      this.found = f.length;
      this.logg();
      return f;
    },
  },
};
</script>

<style>
</style>
