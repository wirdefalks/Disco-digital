<template>
  <div class="flex flex-col justify-start mb-12 bg-ContainerGray">
    

    <div class="pl-9 pt-9">
      <h1 class="text-3xl font-bold text-left">
        {{ $route.params.id }}
      </h1>
     
    </div>

    <div>
      <div v-if="filteredContent">
        <ToggleAccordion />
        <SinglePost
          v-for="(post, index) in filteredContent"
          :post="post"
          :index="index"
          :key="index + post.title + 'vv'"
          :catSlugy="post.category"
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
      let found = this.posts.filter((x) =>
        x.tags.includes(this.$route.params.id)
      );
      return found;
    },
  },
};
</script>

<style>
 
</style>
