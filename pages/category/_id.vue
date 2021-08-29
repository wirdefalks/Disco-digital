<template>
  <div class="flex flex-col justify-start mb-12 bg-ContainerGray">
  
     <div class="pl-9 py-9">
        <h1 class="text-3xl font-bold text-left">{{ filteredContent[0].category[0].title }}</h1>
        <p class="w-1/2 text-left">
          {{filteredContent[0].category[0].description}}
        </p>
      </div>
    <div>
      <div v-if="filteredContent">
        <ToggleAccordion />
        <SinglePost
          v-for="(post, index) in filteredContent"
          :post="post"
          :index="index"
          :key="index + post.title + 'vv'"
          :catSlugy='post.category'
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
      console.log(this.posts)
      let found = this.posts.filter(
        (x) =>x.category[0] && x.category[0].slug.current.toLowerCase().includes(this.$route.params.id) 
      );
        return found;
    },
  },
};
</script>

<style>
 
</style>
